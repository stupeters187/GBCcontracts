var Token = artifacts.require("./Token.sol");

contract('Token - transfer function', (accounts) => {
  var account1 = accounts[0];
  var account2 = accounts[1];

  it("should be able to transfer tokens", async() => {
    tokenContract = await Token.deployed();
    tokenContract.transfer(account2, 500, {from: account1});
    account2Balance = await tokenContract.balanceOf(account2);
    assert.equal(account2Balance, 500);
  });
})
