define(['jquery'], function($) {
    $( "#clickleft" ).click(function() {
        $( "#arrow.box-3" ).animate({
            opacity: 0,
        }, 2000, function() {
            // Animation complete.
        });
        $( "#arrow.box-1" ).animate({
            opacity: 1,
        }, 1000, function() {
            var div = document.getElementById('ai-text');

            let p = document.createElement("p");
            p.style.fontFamily = "Courier New";
            let new_div = div.appendChild(p);
            data = `Okay, let's drive them to school first. And then the floor gets to dry!
                    Note to self: if I ever get in an accident and one of my feet gets pinned, 
                    I will have to start CPR on myself.`;
            $(new_div).append(data).typewrite({
                    'delay': 20,
                });
            // Animation complete.
        });
    });

    $( "#clickright" ).click(function() {
        $( "#arrow.box-3" ).animate({
            opacity: 1,
        }, 1000, function() {
            // Animation complete.
        });
        $( "#arrow.box-1" ).animate({
            opacity: 0,
        }, 2000, function() {
            var div = document.getElementById('ai-text');

            let p = document.createElement("p");
            let new_div = div.appendChild(p);
            data = ' Extra stuff';
            $(new_div).append(data).typewrite({
                    'delay': 20,
                });
        });
    });
});