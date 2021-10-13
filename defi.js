// var requirejs = require('requirejs');

// requirejs(['web3'],
// function   (web3) {
//     console.log('web3.data: ' + web3.data);
//     console.log('web3.name: ' + web3.name);
//     //foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });

// var Web3RequireCallback = requirejs(['web3']);

// var Web3 = Web3RequireCallback('web3');
// var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");


async function getAccount() {
    // const accounts = web3.eth.accounts;
    const accounts = await ethereum.request({ method: "eth_requestAccounts"});
    return accounts[0]
}

async function getBalance(addr) {
    console.log(addr)
    wallet_balance = web3.eth.getBalance(addr);
    return wallet_balance
}

async function connect_wallet() {
    if (typeof window.ethereum !== 'undefined') {
        console.log("Metamask is installed!");
    } else {
        console.log("Please install Metamask");
    }

    var Web3RequireCallback = await requirejs(['web3']);
    // var Web3RequireCallback = requirejs(['web3']);
    console.log(Web3RequireCallback)

    var Web3 = Web3RequireCallback('web3');
    var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");

    console.log(web3);

    getAccount().then(value => {
        // console.log("Address: " + value);
        addr_line = "Address: " + value

        balance = web3.eth.getBalance(value);
        balance.then(result => {
            // console.log(result);
            var text = document.querySelector('#defi h5');
            if (text !== null) {
                // console.log('<p> exists in <div>');
            } else {
                // console.log('<p> does not exists in <div> yet.');
                
                var div = document.getElementById('defi');
                let h = document.createElement("h5");
                
                
                balance_line = "Balance: " + result + " ETH";
                lines = [addr_line, balance_line].join("<br>");

                let new_div = div.appendChild(h);
                $(new_div).append(lines);
            }
        });
    });


        // getBalance(value).then(value => {
        //     console.log("Balance: " + value);
        // })
}


function init_web3_provider() {

    if (typeof window.ethereum !== 'undefined') {
        console.log("Metamask is installed!");
    } else {
        console.log("Please install Metamask");
    }


    require(['web3'], function (web3) {
        //foo is now loaded.
    });

    // var Web3RequireCallback = requirejs(['web3']);

    // var Web3 = web3('web3');
    // var web3 = new Web3("https://mainnet.infura.io/v3/93498ec03efb4660b6f7fa3adfe9bd98");

    // console.log(Web3RequireCallback)

    // console.log(account)
    // var addr;
    // account.then((value) => {
    //     addr = value; 
    // });

}




