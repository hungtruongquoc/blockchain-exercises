const {Web3, utils} = require('web3')
// const mainNetUrl = 'https://mainnet.infura.io/v3/75d8633578a941c8af149434ce47842e'
const localNetUrl= 'http://localhost:8545'
const web3Client = new Web3(localNetUrl)
const address = '0x5C40e6813c86A9332e42cF30c1faA5541830b79d'

const getBalance = async (address) => {
    const response = await web3Client.eth.getBalance(address)
    console.log(utils.fromWei(response, 'ether'))
    const transactionCount = await web3Client.eth.getTransactionCount(address)
    console.log(transactionCount)
    const chainId = await web3Client.eth.getChainId()
    // To answer the title directly, the chain_id of ganache is 0x539 (or 1337).
    console.log(chainId)
}

getBalance(address)
