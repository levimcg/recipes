$(document).ready(function() {

    $(".open-panel").click(function(){
        $("html").addClass("openNav");
    });

    $(".close-panel, #content").click(function(){
        $("html").removeClass("openNav");
    });

    var options = {
        valueNames: [ 'list-name', 'list-description' ]
    };

    var userList = new List('archive-list', options);

});

