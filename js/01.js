$(function () {
    $("#aa").click(function () {
        $("#aa").removeClass("aatr15").addClass("aatr90");

        $("#le1>img").animate({
            width: "110%",
            bottom: "0px",
            left: "-90px"
        }, 120);
        $("#ri1 img").animate({
            width: "110%",
            bottom: "0px",
            right: "-20%"
        }, 120);
        $("#le1>.imga").removeClass("le1imgtt1");
        $("#le1>.imga").addClass("le1imgtt2");

        $("#ri1>.imga").removeClass("ri1c1");
        $("#ri1>.imga").addClass("ri1c2");

        $("#aa").animate(function () {
            $("#aa").removeClass("aatr15").addClass("aatr90");
        }, 300);

        setTimeout(function () {
            $("#aa").animate({ left: "-20%" }, 300);
        }, 300);

        // setTimeout()延迟方法函数的执行
    })
})