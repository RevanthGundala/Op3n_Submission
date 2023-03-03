// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error AlreadyListed(address nftAddress, uint tokenId);
error NotListed(address nftAddress, uint tokenId);
error NotOwner(address nftAddress, uint tokenId, address caller);
error ZeroPrice(address nftAddress, uint tokenId, uint newPrice);
error NotEnoughETH(uint listingPrice, uint buyerAmount);
error MarketplaceNotApproved(address nftAddress, uint tokenId);

contract Marketplace {
    struct Listing {
        uint price;
        address owner;
    }

    mapping(address => mapping(uint => Listing)) private listings;

    event listingCreated(
        address owner,
        uint tokenId,
        uint price,
        address nftAddress
    );

    event listingDeleted(address owner, uint tokenId, address nftAddress);
    event listingUpdated(
        address owner,
        uint tokenId,
        address nftAddress,
        uint newPrice
    );
    event listingBought(
        address owner,
        address buyer,
        uint tokenId,
        address nftAddress,
        uint price
    );

    modifier notListed(uint tokenId, address nftAddress) {
        if (listings[nftAddress][tokenId].price > 0) {
            revert AlreadyListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isListed(uint tokenId, address nftAddress) {
        if (listings[nftAddress][tokenId].price <= 0) {
            revert NotListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isOwner(
        uint tokenId,
        address nftAddress,
        address caller
    ) {
        IERC721 nft = IERC721(nftAddress);
        if (
            listings[nftAddress][tokenId].owner != caller ||
            nft.ownerOf(tokenId) != caller
        ) {
            revert NotOwner(nftAddress, tokenId, caller);
        }
        _;
    }

    modifier marketplaceIsApproved(uint tokenId, address nftAddress) {
        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenId) != address(this)) {
            revert MarketplaceNotApproved(nftAddress, tokenId);
        }
        _;
    }

    function createListing(
        uint tokenId,
        uint _price,
        address nftAddress
    ) external notListed(tokenId, nftAddress) {
        Listing memory listing = listings[nftAddress][tokenId];

        require(_price > 0, "Need to mint with a price greater than 0");
        listing.price = _price;
        listing.owner = msg.sender;

        IERC721 nft = IERC721(nftAddress);
        nft.approve(address(this), tokenId);
        emit listingCreated(msg.sender, tokenId, _price, nftAddress);
    }

    function deleteListing(
        uint tokenId,
        address nftAddress
    )
        external
        isListed(tokenId, nftAddress)
        isOwner(tokenId, nftAddress, msg.sender)
    {
        delete listings[nftAddress][tokenId];
        emit listingDeleted(msg.sender, tokenId, nftAddress);
    }

    function getListing(
        uint tokenId,
        address nftAddress
    )
        public
        view
        isListed(tokenId, nftAddress)
        marketplaceIsApproved(tokenId, nftAddress)
        returns (Listing memory)
    {
        Listing memory listing = listings[nftAddress][tokenId];
        return listing;
    }

    function updateListing(
        uint tokenId,
        uint newPrice,
        address nftAddress
    )
        public
        isListed(tokenId, nftAddress)
        isOwner(tokenId, nftAddress, msg.sender)
        marketplaceIsApproved(tokenId, nftAddress)
    {
        if (newPrice <= 0) {
            revert ZeroPrice(nftAddress, tokenId, newPrice);
        }
        Listing memory listing = listings[nftAddress][tokenId];
        listing.price = newPrice;
        emit listingUpdated(msg.sender, tokenId, nftAddress, newPrice);
    }

    function buyListing(
        uint tokenId,
        address nftAddress
    )
        external
        payable
        isListed(tokenId, nftAddress)
        marketplaceIsApproved(tokenId, nftAddress)
    {
        if (msg.value < listings[nftAddress][tokenId].price) {
            revert NotEnoughETH(listings[nftAddress][tokenId].price, msg.value);
        }
        address tempOwner = listings[nftAddress][tokenId].owner;
        IERC721 nft = IERC721(nftAddress);
        nft.safeTransferFrom(
            listings[nftAddress][tokenId].owner,
            msg.sender,
            tokenId
        );
        delete listings[nftAddress][tokenId];
        emit listingBought(
            tempOwner,
            msg.sender,
            tokenId,
            nftAddress,
            msg.value
        );
    }
}
