requirejs.config({
    baseUrl: 'js',
    paths: {
        web3: 'https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min'
        // web3: "https://github.com/ethereum/web3"
    },
    nodeRequire: require
});
