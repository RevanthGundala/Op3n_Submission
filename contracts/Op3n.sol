// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./NFT.sol";
import "hardhat/console.sol";

contract Op3n is Ownable {
    mapping(address => uint[]) private userToTokenIds;

    event newMessage(address from, address to, uint _tokenId, uint time);
    NFT private nft;
    uint private tokenId;

    constructor() {
        nft = new NFT();
    }

    function sendMessage(address to, string memory uri) public {
        nft.safeMint(to, uri);
        tokenId = nft.getTokenId();
        console.log("tokenId", tokenId);
        userToTokenIds[to].push(tokenId);
        emit newMessage(msg.sender, to, tokenId, block.timestamp);
    }

    function getInbox(address _user) external view returns (uint[] memory) {
        return userToTokenIds[_user];
    }

    function getNFT() external view returns (NFT) {
        return nft;
    }
}
