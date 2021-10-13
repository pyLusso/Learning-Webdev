define(["jquery"], function ($){ 
    $.fn.select_piece = function (options) {
        var settings = {
            'pieceID': undefined
        };
        if (options) $.extend(settings, options);
    
        var selected_tile = document.getElementById(settings.pieceID);
        selected_tile.style.backgroundColor = "GreenYellow"
    
        return [String(settings.pieceID), selected_tile.classList];
    }
});
