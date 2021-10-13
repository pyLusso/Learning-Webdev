define(["jquery", "typewriter"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

    $(document).ready(function() {
        $('.demo').typewrite({
            'delay': 10,
        });
    });
});