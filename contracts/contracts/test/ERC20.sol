pragma solidity =0.5.16;

import '../VisageERC20.sol';

contract ERC20 is VisageERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}