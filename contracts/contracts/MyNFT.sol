// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MyNFT is ERC721Base {
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

    /**
     *  @notice         Returns the metadata URI for an NFT.
     *
     *  @param _tokenId The tokenId of an NFT.
     */
    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        return _buildTokenURI(_tokenId);
    }

    /**
     *  @notice         Constructs the encoded svg string to be returned by tokenURI()
     *
     *  @param _tokenId The tokenId of an NFT.
     */
    function _buildTokenURI(uint256 _tokenId) internal view returns (string memory) {
        bytes memory image = abi.encodePacked(
            "data:image/svg+xml;base64,",
            Base64.encode(
                bytes(
                    abi.encodePacked(
                        '<?xml version="1.0" encoding="UTF-8"?>',
                        '<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">',
                        '<circle cx="105" cy="105" r="105" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 210 210)" fill="url(#paint0_angular_3182_57959)"/>',
                        '<defs>',
                        '<radialGradient id="paint0_angular_3182_57959" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105 80.9639) rotate(90) scale(129.036)">',
                        '<stop stop-color="white"/>',
                        '<stop offset="0.0001" stop-color="#1652F0"/>',
                        '<stop offset="0.293506" stop-color="#1652F0"/>',
                        '<stop offset="1" stop-color="white"/>',
                        '<stop offset="1" stop-color="white" stop-opacity="0"/>',
                        '</radialGradient>',
                        '</defs>',
                        '</svg>'
                    )
                )
            )
        );
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"Base On-chain NFT", "image":"',
                                image,
                                '", "description": "An on-chain NFT deployed on Base."}'
                            )
                        )
                    )
                )
            );
    }
}