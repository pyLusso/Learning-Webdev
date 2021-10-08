/*
    In-browser chess implementation by Luca Russo.
    Some implementation details inspired by chess.com
*/


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
            d.id = "tile-" + (i+1) + (j+1)
            d.className = "board-tile"
            assign_colours(d,i,j)
            let new_div = div.appendChild(d);
        } 

        var board_div = document.getElementById('gameboard');

        for (let j = 0; j < settings["board-width"]; j++) {
            for (let i = 0; i < settings["board-height"]; i++) {
                make_board_tile(board_div,i,j)
            }
        }

    }

    $.fn.populate_board = function () {
        var tileDivs = document.getElementById('gameboard').getElementsByTagName('div');

        for( i=0; i< tileDivs.length; i++ ) {
            var tileDiv = tileDivs[i];
            // console.log(i)
            // console.log(tileDiv)
            // Position black pieces
            if (i==0) {
                tileDiv.classList.add(["piece", "br"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_rook.png')";
            } else if (i==1) {
                tileDiv.classList.add(["piece", "bn"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_knight.png')";
            } else if (i==2) {
                tileDiv.classList.add(["piece", "bb"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_bish.png')";
            } else if (i==3) {
                tileDiv.classList.add(["piece", "bq"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_queen.png')";
            } else if (i==4) {
                tileDiv.classList.add(["piece", "bk"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_king.png')";
            } else if (i==5) {
                tileDiv.classList.add(["piece", "bb"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_bish.png')";
            } else if (i==6) {
                tileDiv.classList.add(["piece", "bn"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_knight.png')";
            } else if (i==7) {
                tileDiv.classList.add(["piece", "br"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_rook.png')";
            } else if (i>=8 && i<16) { 
                tileDiv.classList.add(["piece", "bp"])
                tileDiv.style.backgroundImage = "url('assets/chess/b_pawn.png')";
            }

            // Position black pieces
            reverse_i = tileDivs.length - (i+1)
            console.log(reverse_i)
            console.log(tileDiv)
            if (reverse_i==0) {
                tileDiv.classList.add(["piece", "wr"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_rook.png')";
            } else if (reverse_i==1) {
                tileDiv.classList.add(["piece", "wn"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_knight.png')";
            } else if (reverse_i==2) {
                tileDiv.classList.add(["piece", "wb"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_bish.png')";
            } else if (reverse_i==3) {
                tileDiv.classList.add(["piece", "wq"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_queen.png')";
            } else if (reverse_i==4) {
                tileDiv.classList.add(["piece", "wk"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_king.png')";
            } else if (reverse_i==5) {
                tileDiv.classList.add(["piece", "wb"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_bish.png')";
            } else if (reverse_i==6) {
                tileDiv.classList.add(["piece", "wn"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_knight.png')";
            } else if (reverse_i==7) {
                tileDiv.classList.add(["piece", "wr"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_rook.png')";
            } else if (reverse_i>=8 && reverse_i<16) { 
                tileDiv.classList.add(["piece", "wp"])
                tileDiv.style.backgroundImage = "url('assets/chess/w_pawn.png')";
            }

            //position white pieces
        }
    }
})(jQuery);
