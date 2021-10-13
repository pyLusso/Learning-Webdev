define(["jquery", "generate_board", "populate_board", "assign_colours"], function($) {
    $(document).ready(function() {
        $('#gameboard').generate_board({});
        $('#gameboard').populate_board({});
    });
});

