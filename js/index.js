//网站运行时间脚本
var now = new Date();
function createtime() {
    var grt = new Date("12/07/2018 00:00:00");//修改建站时间
    now.setTime(now.getTime() + 250);
    days = (now - grt) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if (String(hnum).length == 1) { hnum = "0" + hnum; } minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum); mnum = Math.floor(minutes);
    if (String(mnum).length == 1) { mnum = "0" + mnum; } seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); snum = Math.round(seconds);
    if (String(snum).length == 1) { snum = "0" + snum; } document.getElementById("timeDate").innerHTML = "网站已稳定运行 " + dnum + " 天";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
} setInterval("createtime()", 250);

// <!-- 一言 -->
// 异步ajax
$.ajax({
    type: 'GET',
    url: 'https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335',
    success: function (data) {
        $(".text").text(data.hitokoto);  // 获取名言内容
        if (data.source) {     // 如果来源不为空
            $(".author").text(data.source);
        } else {
            $(".source").hide();   // 隐藏来源
        }
        // 淡入显示
        $(".show-sentence").fadeIn(4000)
    },
});


