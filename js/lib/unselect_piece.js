define(["jquery"], function ($){ 
    $.fn.unselect_piece = function (options) {
        var settings = {
            'pieceID': undefined
        };
        if (options) $.extend(settings, options);

        var selected_tile = document.getElementById(settings.pieceID);
        try {
            tile_id = selected_tile.id
        } catch(err) {
            console.log("No previously selected piece");
            return
        }
        
        tile_idx = tile_id.slice(-2)
        i = tile_idx[0] - 1
        j = tile_idx[1] % 8 
        $().assign_colours(selected_tile, i, j)
    }     
});

