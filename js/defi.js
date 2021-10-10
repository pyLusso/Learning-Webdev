
async function getAccount() {
    const accounts = await ethereum.request({ method: "eth_requestAccounts"});
    const account = accounts[0];
    console.log(account);
}

function web3_demo() {
    console.log("Clicked");
    console.log(typeof window.ethereum);

    if (typeof window.ethereum !== 'undefined') {
        console.log("Metamask is installed!");
    } else {
        console.log("Please install Metamask");
    }
    var Web3RequireCallback = requirejs(['web3']);

    var Web3 = Web3RequireCallback('web3');

    var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");

    const ethEnabled = async () => {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            await ethereum.enable();
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        }
    }
    ethEnabled()
    getAccount()
    // console.log(Web3.version)
    // console.log(window)
    // console.log(web3)

    // console.log(web3.eth.getBlockNumber())

    // const ethEnabled = async () => {
    // if (window.ethereum) {
    //     alert("we are in the loop")
    //     console.log(window.ethereum)
    //     await window.ethereum.send('eth_requestAccounts');
    //     window.web3 = new Web3(window.ethereum);
    //     return true;
    // }
    // return false;
    }


// import detectEthereumProvider from '@metamask/detect-provider';

var requirejs = require('requirejs');

requirejs(['web3'],
function   (web3) {
    console.log('web3.data: ' + web3.data);
    console.log('web3.name: ' + web3.name);
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
});
