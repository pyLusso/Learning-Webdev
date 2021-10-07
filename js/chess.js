
$(function ($) {
    $.fn.generate_board = function (options) {
        var settings = {
            'board-width': 8,
            'board-height': 8
        };
        if (options) $.extend(settings, options);

        function assign_colours(div,i,j) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    div.style.backgroundColor = 'OldLace';
                } else {
                    div.style.backgroundColor = 'OliveDrab';
                } 
            } else {
                if (j % 2 == 0) {
                    div.style.backgroundColor = 'OliveDrab';
                } else {
                    div.style.backgroundColor = 'OldLace';
                } 
            }
        }
        
        function make_board_tile(div,i,j) {
            let d = document.createElement("div");
            d.id = "rank-" + (i + 1)
            d.className = "board-tile"
            assign_colours(d,i,j)
            let new_div = div.appendChild(d);
        } 

        var board_div = document.getElementById('gameboard');

        for (let j = 0; j < settings["board-width"]; j++) {
            for (let i = 0; i < settings["board-height"]; i++) {
                if (i == 0) {
                    let d = document.createElement("div");
                    d.id = "file-" + (j + 1)
                    d.className = "board-tile"
                    assign_colours(d,i,j)
                    var new_div = board_div.appendChild(d); 
                }
                var div = new_div
                make_board_tile(div,i,j)
            }
        }

    }

    $.fn.populate_board = function () {
        var fileDivs = document.getElementById('gameboard').getElementsByTagName('div');

        for( i=0; i< fileDivs.length; i++ ) {
            var fileDiv = fileDivs[i];
            var rankDivs = fileDiv.getElementsByTagName('div');
            for( j=0; j< rankDivs.length; j++ ) {  
                var rankDiv = rankDivs[j];
                console.log(j)
                if (j == 1) {
                    let img = document.createElement("img");
                    img.src = "assets/chess/b_pawn.png";
                    img.className = "piece"
                    rankDiv.appendChild(img);
                    // rankDiv.style.backgroundImage = "url('assets/chess/b_pawn.png')";
                    // rankDiv.style.backgroundRepeat = "no-repeat";
                    // rankDiv.style.textAlign = "center";
                } else if (j == 6) {
                    let img = document.createElement("img");
                    img.src = "assets/chess/w_pawn.png";
                    img.className = "piece"
                    rankDiv.appendChild(img);
                }
            }

        }
    }
})(jQuery);


$(function ($) {

})(jQuery);
