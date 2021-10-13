define(["jquery"], function ($){ 
    $.fn.highlight_moves = function (options) {
        var settings = {
            'tileID': undefined,
            'pieceClass': undefined
        };
        if (options) $.extend(settings, options);

        pieceType = settings.pieceClass[settings.pieceClass.length - 1]

        tilePos = settings.tileID.slice(-2)
        tileFile = parseInt(tilePos[0]) 
        tileRank = parseInt(tilePos[1]) 

        tileID_prefix = settings.tileID.slice(0,-2)

        let d_marker = document.createElement("img");
        d_marker.src = "assets/chess/d_pm_trans.png";
        d_marker.className = "valid-marker";
        d_marker.width= "25";
        d_marker.height= "25";

        let l_marker = document.createElement("img");
        l_marker.src = "assets/chess/l_pm_trans.png";
        l_marker.className = "valid-marker";
        l_marker.width= "25";
        l_marker.height= "25";

        if (pieceType=="wp" && tileRank==2) {
            // White pawns can move forward up to 2 tiles when on the 2nd rank.
            validTiles = []

            for (let i = 1; i <= 2; i++) {
                validTiles.push(tileID_prefix + tileFile + (tileRank+i));
            }

            for (let i = 1; i <= validTiles.length; i++) {
                var validTile = document.getElementById(validTiles[i-1]);

                validTile.append(d_marker)
            }
        }
    }
});