define(["jquery", "metamask"], function($, metamask) {
    async function detect_eth_provider() {
        return await detectEthereumProvider();
    }
});