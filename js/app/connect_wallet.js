define(["jquery", "metamask"], function($, metamask) {
    localStorage.clear();

    $( "#metamask" ).click(async function() {
        // const provider = await metamask.detect_eth_provider();
        // console.log(provider);

        if (ethereum.selectedAddress !== null) {
            try {
                $('#wallet').remove();
            } catch {
                console.log("Stats haven't been logged yet!")
            };
        };

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
        // prom = $().toggle_connect_button({web3});
        // console.log(prom)

        accounts = await web3.eth.getAccounts();
        console.log(ethereum.selectedAddress); 

        $('#metamask').replaceWith($("<p class='nav-1'>" + "wallet connected" + "</p>"));

    });
});

