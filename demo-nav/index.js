$(function () {
    $("#nav1").click(function () {
        if ($("#menu1").css("display") == "none") {
            $("#menu1").css("display", "flex");
            $("#menu2,#menu3,#menu4").css("display", "none");
        } else {
            $("#menu1,#menu2,#menu3,#menu4").css("display", "none");
        }
    });

    $("#nav2").click(function () {
        if ($("#menu2").css("display") == "none") {
            $("#menu2").css("display", "flex");
            $("#menu1,#menu3,#menu4").css("display", "none");
        } else {
            $("#menu1,#menu2,#menu3, #menu4").css("display", "none");
        }
    });

    $("#nav3").click(function () {
        if ($("#menu3").css("display") == "none") {
            $("#menu3").css("display", "flex");
            $("#menu2,#menu1,#menu4").css("display", "none");
        } else {
            $("#menu1,#menu2,#menu3, #menu4").css("display", "none");
        }
    });

    $("#nav4").click(function () {
        if ($("#menu4").css("display") == "none") {
            $("#menu4").css("display", "flex");
            $("#menu1,#menu2,#menu3").css("display", "none");
        } else {
            $("#menu1,#menu2,#menu3, #menu4").css("display", "none");
        }
    });
    // 双击好好欣赏xiaojiejie
    $(document).dblclick(function () {
        $("nav").fadeToggle(100);
        $("#main").fadeToggle(100);
    });
    // 单击隐藏快捷方式
    // $("#main").click(function(){
    //     $("#menu1,#menu2,#menu3, #menu4").css("display", "none");
    // })

});

