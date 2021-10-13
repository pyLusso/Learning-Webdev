define(["jquery", "highlight_moves", "select_piece", "unselect_piece"], function($) {
    $(document).ready(function(){
        var prev_id = undefined
        $( ".piece" ).click(function() {
            $().unselect_piece({
                'pieceID': prev_id
            });

            pieceInfo = $($).select_piece({
                'pieceID': this.id
            });

            $().highlight_moves({
                'tileID': pieceInfo[0],
                'pieceClass': pieceInfo[1]
            });
            prev_id = pieceInfo[0]
        });
    });  
});