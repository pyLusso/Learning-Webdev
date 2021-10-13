define(["jquery"], function($) {
    $.fn.generate_board = function (options) {
        var settings = {
            'board-width': 8,
            'board-height': 8
        };
        if (options) $.extend(settings, options);

        
        function make_board_tile(div,i,j) {
            let d = document.createElement("div");
            d.id = "tile-" + (i+1) + (8-j)
            d.className = "board-tile"
            $().assign_colours(d,i,j)
            div.appendChild(d);
        } 

        var board_div = document.getElementById('gameboard');

        for (let j = 0; j < settings["board-width"]; j++) {
            for (let i = 0; i < settings["board-height"]; i++) {
                make_board_tile(board_div,i,j)
            }
        }

    }
});