pragma solidity ^0.4.24;

contract Token {

  address owner;
  uint public totalSupply;

  mapping (address => uint) balances;

  constructor(uint _totalSupply) public {
    owner = msg.sender;
    totalSupply = _totalSupply;
    balances[owner] = totalSupply;
  }

  function transfer(address _to, uint _value) public returns (bool)  {
    require(balances[msg.sender] >= _value &&
            balances[_to] + _value > balances[_to]);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }

  function balanceOf(address _owner) public view returns (uint) {
    return balances[_owner];
  }
}
