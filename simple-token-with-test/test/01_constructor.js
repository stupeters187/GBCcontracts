var Token = artifacts.require("./Token.sol");

contract('Token - constructor', (accounts) => {
  it("should create a total supply equal to the argument given", async() => {
    tokenContract = await Token.deployed();
    totalSupply = await tokenContract.totalSupply();
    assert.equal(totalSupply, 1000);
  });

  it("should give totalSupply to owner", async() => {
    ownerBalance = await tokenContract.balanceOf(web3.eth.accounts[0]);
    assert.equal(ownerBalance, 1000)
  });
})
