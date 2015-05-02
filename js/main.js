$(function(){
    intro = $("#intro-bg");
    logo = $("#logo");
    logoMini = $(".logo-mini");
    mainMenu = $("#main-menu");
    menubg = $(".menu-bg");
    protobg = $(".proto-bg");
    video = false;
    $(window).scroll(scroll);
    $(window).resize(resize);
    $(".show-menu").click(displayMenu);
    $(".img-container").click(showImage);
    $(".img-container").hover(function(){
        $(this).children("img").animate({"opacity": 0.2});
    }, function(){
        $(this).children("img").animate({"opacity": 1});
    });
    $(".image-fullscreen").click(closeImage);
    resize();
    $(".img-container").children("img").bind("contextmenu",function(e){
        return false;
       });

});

function scroll() {
    var scrollTop = $(window).scrollTop();
    console.log("scroll: " + scrollTop);
    var scrollMod = scrollTop/7;
              
    if (scrollTop > introHeight) {
        intro.hide();
        logo.hide();
    } else {
        intro.show();
        logo.show();
        intro.css({"transform": "translateY(" + -scrollMod + "px)"});
        logo.css({"transform": "translateY(" + -scrollMod + "px)",
              "opacity": 1-scrollMod/32});
    }
    
    if (windowWidth > 900){
       if (scrollTop > introHeight) {
            logoMini.fadeIn();
            menubg.fadeIn();
            mainMenu.addClass("menu-dark");
        } else {
            logoMini.fadeOut();
            menubg.fadeOut();
            mainMenu.removeClass("menu-dark");
        }
    }
    
    if (windowWidth > 768 && scrollTop + windowHeight > protoTop) {
        var initPos = windowHeight-protobgHeight+protoHeight/7;
        var desp = scrollTop + windowHeight - protoTop;
        protobg.css({"background-position-y": initPos-desp/7 +"px"});
    }
}

function resize() {
    console.log("resize");
    if (!video && $(window).width() > 900){
        video = $('<video id="video-bricolabs" autoplay loop preload="auto"><source src="images/bricolabs_video.mp4" type="video/mp4"><source src="images/bricolabs_video.ogv" type="video/ogg"></video>').appendTo($(".video"));
    }
    
    if (video != false) {
        var videoHeight = video.height();
        // center it depending windows size
        video.css({"transform": "translateY(" + -(videoHeight - $(".video").height())/2 + "px)"});
        
    }
    $(".img-description").height(function() {
        var img = $(this).next("img");
        img.css("top", -img.height());
        return img.height();
       });
    
    introHeight = intro.height();
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    protoTop = $(".proto").position().top;
    protoHeight = $(".proto").height();
    protobgHeight = $(".proto-bg").height();
}

function displayMenu() {
    if ($(".show-menu").hasClass("close-menu")) {
        $(".menu-mobile").slideUp();
        $(".show-menu").removeClass("close-menu");
    } else {
        $(".menu-mobile").slideDown();
        $(".show-menu").addClass("close-menu");
    }
}

function showImage() {
    var url = $(this).children("img").attr("src");
    url = String(url).replace("small", "large");
    var image = $('<img src="' + url + '"/>');
    var fullscreen = $(".image-fullscreen");
    var shadow = $(".shadow");
    fullscreen.append(image);
    shadow.show();
    shadow.animate({"opacity": 0.9}, function () {
        fullscreen.show();
    });
}

function closeImage() {
    console.log("closeImage");
    var fullscreen = $(".image-fullscreen");
    fullscreen.children("img").remove();
    fullscreen.hide();
    $(".shadow").animate({"opacity": 0}, function () {
        $(this).hide();
    });
}
