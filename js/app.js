
// var requirejs = require('r.js');
// var requirejs = require('js/lib/requirejs.js');

requirejs.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        jquery: 'https:////ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        web3: 'https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min',
        typewriter: 'typewriter',
        chess_init: '../app',
        chess_play: '../app',
        connect_wallet: '../app',
        display_wallet_stats: '../app',
        toggle_connect_button: '../app'
    },
    nodeRequire: require
});




// requirejs(["chess"]);

// require(['web3'], function (web3) {
//     console.log(web3)
// });



// requirejs(['web3'],
// function   (web3) {
//     // foo and bar are loaded according to requirejs
//     //config, but if not found, then node's require
//     //is used to load the module.
// });