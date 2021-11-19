$("#aa").click(function () {
    $("#aa").removeClass("aatr15").addClass("aatr90");

    $("#aa").animate(function () {
        $("#aa").removeClass("aatr15").addClass("aatr90");
    });

    setTimeout(function () {
        $("#aa").animate({ left: "-350px" }, 300);
    }, 500);
    // setTimeout()延迟方法函数的执行
})