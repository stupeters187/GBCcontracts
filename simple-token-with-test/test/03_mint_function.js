var Token = artifacts.require("./Token.sol");

contract('Token - mint function', (accounts) => {

  var account1 = web3.eth.accounts[0];
  var account2 = web3.eth.accounts[1];

  it("owner should be able to mint new token to totalSupply", async() => {
    tokenContract = await Token.deployed();
    tokenContract.mint(1000, {from: account1});
    newTotalSupply = await tokenContract.totalSupply();
    assert.equal(newTotalSupply, 2000);
  })
});
