define(["jquery"], function($) {
    $.fn.assign_colours= function (div,i,j) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                div.style.backgroundColor = 'OldLace';
                div.classList.add('light')
            } else {
                div.style.backgroundColor = 'OliveDrab';
                div.classList.add('dark')
            } 
        } else {
            if (j % 2 == 0) {
                div.style.backgroundColor = 'OliveDrab';
                div.classList.add('dark')
            } else {
                div.style.backgroundColor = 'OldLace';
                div.classList.add('light')
            } 
        }
    }

});
