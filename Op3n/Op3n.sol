// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

error Error__NotNFT(address msg_sender, address nftAddress);

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./NFT.sol";

contract Op3n is Ownable {
    mapping(address => uint[]) private userToTokenIds;

    event newMessage(address _user, uint _tokenId, uint time);
    NFT private nft;

    // modifier onlyNft() {
    //     if (msg.sender != nftAddress) {
    //         revert Error__NotNFT(msg.sender, nftAddress);
    //     }
    //     _;
    // }

    constructor() {
        nft = new NFT();
    }

    function sendMessage(address _user, string memory uri) external returns(uint256){
        uint _tokenId = nft.safeMint(_user,uri);
        userToTokenIds[_user].push(_tokenId);
        emit newMessage(_user, _tokenId, block.timestamp);
        return _tokenId;

    }

    function getInbox(address _addr) external view returns (uint[] memory) {
        return userToTokenIds[_addr];
    }

    function getNFT() external view returns (NFT){
        return nft;
    }
}
