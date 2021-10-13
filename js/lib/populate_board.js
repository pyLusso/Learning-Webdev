define(["jquery"], function($, populate_board) {
    $.fn.populate_board = function () {
        var tileDivs = document.getElementById('gameboard').getElementsByTagName('div');

        for( i=0; i< tileDivs.length; i++ ) {
            var tileDiv = tileDivs[i];
            // Position black pieces
            if (i==0) {
                tileDiv.classList.add("piece", "br")
                tileDiv.style.backgroundImage = "url('assets/chess/b_rook.png')";
            } else if (i==1) {
                tileDiv.classList.add("piece", "bn")
                tileDiv.style.backgroundImage = "url('assets/chess/b_knight.png')";
            } else if (i==2) {
                tileDiv.classList.add("piece", "bb")
                tileDiv.style.backgroundImage = "url('assets/chess/b_bish.png')";
            } else if (i==3) {
                tileDiv.classList.add("piece", "bq")
                tileDiv.style.backgroundImage = "url('assets/chess/b_queen.png')";
                tileDiv.style.backgroundRepeat = "no-repeat";
            } else if (i==4) {
                tileDiv.classList.add("piece", "bk")
                tileDiv.style.backgroundImage = "url('assets/chess/b_king.png')";
            } else if (i==5) {
                tileDiv.classList.add("piece", "bb")
                tileDiv.style.backgroundImage = "url('assets/chess/b_bish.png')";
            } else if (i==6) {
                tileDiv.classList.add("piece", "bn")
                tileDiv.style.backgroundImage = "url('assets/chess/b_knight.png')";
            } else if (i==7) {
                tileDiv.classList.add("piece", "br")
                tileDiv.style.backgroundImage = "url('assets/chess/b_rook.png')";
            } else if (i>=8 && i<16) { 
                tileDiv.classList.add("piece", "bp")
                tileDiv.style.backgroundImage = "url('assets/chess/b_pawn.png')";
            }

            // Position black pieces
            reverse_i = tileDivs.length - (i+1)
            if (reverse_i==0) {
                tileDiv.classList.add("piece", "wr")
                tileDiv.style.backgroundImage = "url('assets/chess/w_rook.png')";
            } else if (reverse_i==1) {
                tileDiv.classList.add("piece", "wn")
                tileDiv.style.backgroundImage = "url('assets/chess/w_knight.png')";
            } else if (reverse_i==2) {
                tileDiv.classList.add("piece", "wb")
                tileDiv.style.backgroundImage = "url('assets/chess/w_bish.png')";
            } else if (reverse_i==3) {
                tileDiv.classList.add("piece", "wq")
                tileDiv.style.backgroundImage = "url('assets/chess/w_queen.png')";
                tileDiv.style.backgroundRepeat = "no-repeat";
            } else if (reverse_i==4) {
                tileDiv.classList.add("piece", "wk")
                tileDiv.style.backgroundImage = "url('assets/chess/w_king.png')";
            } else if (reverse_i==5) {
                tileDiv.classList.add("piece", "wb")
                tileDiv.style.backgroundImage = "url('assets/chess/w_bish.png')";
            } else if (reverse_i==6) {
                tileDiv.classList.add("piece", "wn")
                tileDiv.style.backgroundImage = "url('assets/chess/w_knight.png')";
            } else if (reverse_i==7) {
                tileDiv.classList.add("piece", "wr")
                tileDiv.style.backgroundImage = "url('assets/chess/w_rook.png')";
            } else if (reverse_i>=8 && reverse_i<16) { 
                tileDiv.classList.add("piece", "wp")
                tileDiv.style.backgroundImage = "url('assets/chess/w_pawn.png')";
            }
        }
    }
});