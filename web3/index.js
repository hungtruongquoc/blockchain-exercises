const {Web3} = require('web3')
const mainNetUrl = 'https://mainnet.infura.io/v3/75d8633578a941c8af149434ce47842e'
const web3Client = new Web3(mainNetUrl)
const address = '0x5C40e6813c86A9332e42cF30c1faA5541830b79d'

const getBalance = async (address) => {
    const response = await web3Client.eth.getBalance(address)
    console.log(response)
}

getBalance(address)
