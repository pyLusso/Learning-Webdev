define(['jquery'], function($) {
    $.fn.display_wallet_stats = function() {
        var div = document.getElementById("defi");
        let h = document.createElement("h5");
        h.id = "wallet";

        wallet_addr = localStorage.getItem("wallet_address");
        wallet_bal = localStorage.getItem("wallet_balance");

        addr_line = "Address: " + wallet_addr;
        bal_line = "Balance: " + wallet_bal + " ETH";
        lines = [addr_line, bal_line].join("<br>");

        let new_div = div.appendChild(h);
        $(new_div).append(lines);
    }
});

