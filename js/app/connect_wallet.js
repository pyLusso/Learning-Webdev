define(["jquery", "web3"], function($, web3) {
    localStorage.clear();

    const Web3 = require('web3')
    var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");

    $( "#metamask" ).click(async function() {
        wallet_addr = await ethereum.request({ method: "eth_requestAccounts"});
        wallet_bal = await web3.eth.getBalance(wallet_addr[0]);
        let ethBalance = web3.utils.fromWei(wallet_bal, 'ether');
        // wallet_bal = await web3.eth.getBalance(wallet_addr[0])
        console.log(wallet_addr);
        console.log(ethBalance);

        //Store the wallet address and balance in browsers local storage
        localStorage && (localStorage.wallet_address = wallet_addr);
        localStorage && (localStorage.wallet_balance = ethBalance);

        $().display_wallet_stats({});
        $().toggle_connect_button({web3});
    });
});

