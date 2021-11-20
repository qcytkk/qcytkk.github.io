$(function () {
    var windoww = $(window).width();
    var lix = parseInt(windoww / 150);

    for (i = 0; i < lix + lix + lix; i++) {
        var $lia0 = $(`<li>qcytkk</li>`)
        $("#a0").append($lia0);
        var $lia1 = $(`<li>崩坏3rd</li>`)
        $("#a1").append($lia1);
    }

    $(window).resize(function () {
        var windoww = $(window).width();
        var lix = parseInt(windoww / 150);

        for (i = 0; i < lix + lix + lix; i++) {
            var $lia0 = $(`<li>qcytkk</li>`)
            $("#a0").append($lia0);
            var $lia1 = $(`<li>崩坏3rd</li>`)
            $("#a1").append($lia1);
        }
    })

})
