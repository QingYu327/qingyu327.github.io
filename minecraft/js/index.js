// 入口函数
$(() => {
    $("body").fadeIn(300, () => {
        wWidth = $(window).width();
        if (wWidth > 540) {
            download_animation();
        }
        return;
    });
    // 视口高度
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    // 滑动监听
    var csTop = 0;
    const nShell_delay = $(".nav-shell").css("transition").split(" ")[1].replace("s", "") * 1000;
    $(window).scroll(() => {
        var sTop = $(window).scrollTop();
        const nav_shell = $(".nav-shell");
        if (sTop > csTop) {
            csTop = sTop;
            if (wWidth > 540) {
                nav_shell.css("top", "2vh");
            }
            if (sTop > (wHeight / 10)) {
                nav_shell.css("opacity", ".8");
            }
            window.setTimeout(() => {
                nav_shell.css("top", "0");
            }, nShell_delay);
        } else if (sTop < csTop) {
            csTop = sTop;
            if (wWidth > 540) {
                nav_shell.css("top", "-2vh");
            }
            if (sTop < (wHeight / 10)) {
                nav_shell.css("opacity", "1");
            }
            window.setTimeout(() => {
                nav_shell.css("top", "0");
            }, nShell_delay);
        } else {
            nav_shell.css({
                "opacity": "1"
            });
        }
        if (wWidth > 540 && sTop >= (wHeight * 0.75)) {
            manual_animation();
        }
        if (wWidth < 540 && sTop >= (wHeight * 1.75)) {
            manual_animation();
        }
        if (sTop >= wHeight * 0.75 && wWidth < 540) {
            download_animation();
        }
        return;
    });
    // 导航跳转
    const nDelay = 800;
    $(".index").click(() => {
        wHeight = $(window).height();
        $("html").animate({
            scrollTop: wHeight * 0
        }, nDelay);
        return;
    });
    $(".manual").click(() => {
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        if (wWidth > 540) {
            $("html").animate({
                scrollTop: wHeight * 1
            }, nDelay);
        } else {
            $("html").animate({
                scrollTop: wHeight * 2
            }, nDelay);
        }
        return;
    });
    $(".download").click(() => {
        var wHeight = $(window).height();
        $("html").animate({
            scrollTop: wHeight * 1
        }, nDelay);
        return;
    });
    $(".joinQQ").click(() => {
        window.open("https://blog.qinglin.co/tag/mc/", "_blank");
    });
    $(".skin").click(() => {
        window.open("https://littleskin.cn/", "_blank");
    });
    $(".bbs").click(() => {
        window.open("http://www.jpixe/", "_blank");
    });
    // 轮播图
    var sli = 0;
    (function () {
        const slist = $(".slide-list"),
            snav = $(".slide-nav");
        for (var i = 0; i < slist.children("li").length; i++) {
            snav.append("<li value=" + i + "></li>");
            snav.css({
                "width": (i * 50) + "px",
                "margin-left": -(i * 50) / 2 + "px"
            });
        }
        $(".slide-list").css("width", (i * 100) + "vw");
        window.setInterval(() => {
            slide(slist);
        }, 6000);
        slide(slist);
        return;
    }());
    function slide(obj) {
        if (sli < obj.children("li").length) {
            $(".slide-nav").children("li").css("background-color", "#ffffff");
            $(".slide-nav").children("li")[sli].style.backgroundColor = "#FFD700";
            sli += 1;
        } else {
            sli = 0;
            obj.animate({
                opacity: "0"
            }, 500, () => {
                window.setTimeout(() => {
                    obj.animate({
                        opacity: "1"
                    }, 500);
                }, 1000);
            });
            $(".slide-nav").children("li").css("background-color", "#ffffff");
            $(".slide-nav").children("li")[sli].style.backgroundColor = "#FFD700";
            slide(obj);
        }
        obj.css({
            "left": -((sli - 1) * 100) + "vw"
        });
        return;
    }
    // 下载游戏
    const dDelay = 300;
    function download_animation() {
        $(".download-list").fadeIn(dDelay);
        $(".download-list:eq(0)").animate({
            left: "0"
        }, dDelay);
        $(".download-list:eq(1)").animate({
            right: "0"
        }, dDelay);
    }
    $(".download-button:eq(0)").click(() => {
        window.open("./windows.html", "_blank");
    });
    $(".download-button:eq(1)").click(() => {
        window.open("./mobile.html", "_blank");
    });

    // 游戏手册
    const mDelay = 300;
    var manual_show = false;
    function manual_animation() {
        window.setTimeout(() => {
            if (!manual_show) {
                manual_show = true;
                $(".manual-main").animate(
                    {
                        opacity: "1",
                        top: "15vh"
                    }, mDelay);
            }
            return;
        }, mDelay / 2);
    }
    const mmDealy = 100;
    $(".manual-list-main").click(() => {
        mTitle.hide(mmDealy, () => {
            mTitle.show(mmDealy);
        });
        mText.fadeOut(mmDealy, () => {
            mText.fadeIn(mmDealy);
        });
    });
    const mT = {
        "PC": "基岩服状态",
        "PE": "Java服状态",
        "rule": "游戏规定",
        "OU": "排位赛OU规则",
        "kl": "常用小知识"
    },
        mTitle = $(".manual-teach-title"),
        mText = $(".manual-teach-text");
    $("#manual-PC-button").click(() => {
        window.setTimeout(() => {
            mTitle.text(mT["PC"]);
            mText.html("<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='500px' height='195px' scrolling=no src='//motdbe.blackbe.xyz/iframe.html?ip=be.steam.cf&port=29595&dark=false&join_open=true'></iframe>");
        }, mmDealy);
    });
    $("#manual-PE-button").click(() => {
        window.setTimeout(() => {
            mTitle.text(mT["PE"]);
            
            mText.html("<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='500px' height='195px' scrolling=no src='//motdbe.blackbe.xyz/iframe.html?ip=java.steam.cf&port=25565&dark=false&join_open=true'></iframe>");
        }, mmDealy);
    });
    $("#manual-rule-button").click(() => {
        window.setTimeout(() => {
            mTitle.text(mT["rule"]);
            mText.html("1-1: 服务器基于困难难度，无规则, 原创地图, 更有挑战性。<br>1-2: 没有排队系统, 没有白名单, 没有正版验证, 没有漏洞修复, 支持所有id注册(包括中文id) <br>1-3: 不阉割传统的游戏特性和玩法，在这里你可以放心大胆展现身手创建大型建筑，可以得到免费的领地<br>1-4: java服有大量mod，增加了游戏的趣味性也增加了更多的生存玩法。<br><span class='red'>1-5: 基岩版服务器支持Android & IOS & Windows系统互通</span>")
        }, mmDealy);
    });
    $("#manual-OU-button").click(() => {
        window.setTimeout(() => {
            mTitle.text(mT["OU"]);
            mText.html("尚未编撰...");
        }, mmDealy);
    });
    $("#manual-kl-button").click(() => {
        window.setTimeout(() => {
            mTitle.text(mT["kl"]);
            mText.html("尚未编撰...");
        }, mmDealy);
    });
    // 读取浏览量
    // 设置服务器端口号
    const port = 301;
    (function () {
        $("#view").load("http://www.JPixel.yz:" + port);
    }())
});
