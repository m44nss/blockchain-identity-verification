pragma solidity ^0.8.0;

contract Identity {

    mapping(address => string) public identities;

    function registerIdentity(string memory _hash) public {
        identities[msg.sender] = _hash;
    }

    function verifyIdentity(address user, string memory _hash) public view returns (bool) {
        return keccak256(bytes(identities[user])) == keccak256(bytes(_hash));
    }
}