

$(function ($) {
    $.fn.generate_board = function (options) {
        var settings = {
            'selector': this,
            'board-width': 8,
            'board-height': 8
        };
        if (options) $.extend(settings, options);
        
        function make_board_tile(div,i,j) {
            let d = document.createElement("div");
            d.id = "file-" + (i + 1)
            d.className = "board-tile"
            let new_div = div.appendChild(d);

            data = 'Cell';
            $(new_div).append(data)
        } 

        var board_div = document.getElementById('gameboard');

        for (let j = 0; j < settings["board-height"]; j++) {
            for (let i = 0; i < settings["board-width"]; i++) {
                if (i == 0) {
                    let d = document.createElement("div");
                    d.id = "rank-" + (j + 1)
                    d.className = "board-tile"
                    var new_div = board_div.appendChild(d); 
                }
                var div = new_div
                make_board_tile(div,i,j)
            }
        }

    }
})(jQuery);