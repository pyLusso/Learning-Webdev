define(["jquery", "web3"], function($, web3) {

    // const Web3 = require('web3')
    // var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");
    $.fn.toggle_connect_button = async function() {
        accounts = await web3.eth.getAccounts();
        console.log(accounts);
    };
});

// web3.eth.getAccounts( function(err, accounts){
//     if (err != null) console.error("An error occurred: "+err);
//     else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
//     else console.log("User is logged in to MetaMask");
// });