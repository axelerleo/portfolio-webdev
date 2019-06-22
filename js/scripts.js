// $(".main-parallax").each(function() {
//   let img = $(this);
//   let imgParent = $(this).parent();
//   function parallaxImg() {
//     let speed = img.data("speed");
//     let coords = img.data("coords") || 50;

//     let imgY = imgParent.offset().top;
//     let winY = $(this).scrollTop();
//     let winH = $(this).height();
//     let parentH = imgParent.innerHeight();

//     // The next pixel to show on screen
//     var winBottom = winY + winH;

//     // If block is shown on screen
//     if (winBottom > imgY && winY < imgY + parentH) {
//       // Number of pixels shown after block appear
//       var imgBottom = (winBottom - imgY) * speed;
//       // Max number of pixels until block disappear
//       var imgTop = winH + parentH;
//       // Porcentage between start showing until disappearing
//       var imgPercent = (imgBottom / imgTop) * 100 + (coords - speed * 50);
//     }
//     img.css({
//       top: imgPercent + "%",
//       transform: "translate(-50%, -" + imgPercent + "%)"
//     });
//   }
//   document.addEventListener(
//     "scroll",
//     function() {
//       parallaxImg();
//     },
//     { passive: false }
//   );
// });

(function() {
  "use strict";

  var upDownBtn = document.querySelector(".up_down_btn");
  var arrowsBlock = document.querySelector(".home__arrows");
  var check;
  var coordsY = 0;

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > 0) {
      arrowsBlock.classList.add("home__arrows--invisible");
    } else {
      arrowsBlock.classList.remove("home__arrows--invisible");
    }

    if (scrolled > coords) {
      upDownBtn.classList.add("up_down_btn-show");

      upDownBtn.setAttribute("title", "Наверх");
      upDownBtn.classList.add("up_down_btn-up");
      check = false;
    }
    if (scrolled === 0) {
      upDownBtn.setAttribute("title", "Вниз");
      upDownBtn.classList.remove("up_down_btn-up");
      check = true;
    }
  }

  function backToTop() {
    upDownBtn.classList.add("up_down_btn-disabled");

    if (!check) {
      coordsY = pageYOffset;
      (function goTop() {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -40);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove("up_down_btn-disabled");
        }
      })();
      return;
    } else if (check) {
      (function goBottom() {
        window.scrollTo(0, coordsY);
        upDownBtn.classList.remove("up_down_btn-disabled");
      })();
      return;
    }
  }

  window.addEventListener("scroll", trackScroll, { passive: false });
  upDownBtn.addEventListener("click", backToTop);
})();

//anchor links smooth scroll

$(function() {
  $("a[href^='#'], div[href^='#']").click(function() {
    var link = this;
    if (this.tagName == "DIV") {
      link = this.querySelector("a");
    }
    if (
      location.pathname.replace(/^\//, "") ==
        link.pathname.replace(/^\//, "") &&
      location.hostname == link.hostname
    ) {
      var $target = $(link.hash);
      $target =
        ($target.length && $target) || $("[name=" + link.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate({ scrollTop: targetOffset }, 700); //скорость прокрутки
        return false;
      }
    }
  });
});

window.addEventListener("load", function() {
  try {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: "rgb(230, 81, 11)",
      outlineColour: "rgb(59, 128, 28)",
      reverse: true,
      depth: 1.0,
      maxSpeed: 0.05,
      freezeActive: true,
      wheelZoom: false
    });
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById("myCanvasContainer").style.display = "none";
  }

  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08
  });
  // let Scrollbar = window.Scrollbar;
  // console.log(Scrollbar);

  // Scrollbar.init(document.getElementById("luxy"), {
  //   damping: 0.02
  // });

  $(".lang-btn").on("click", function() {
    $(".lang-btn").removeClass("border");
    $(this).addClass("border");
  });

  $(".eng-btn").click(function() {
    $(".rus").hide(0);
    $(".english").show(0);
  });
  $(".rus-btn").click(function() {
    $(".english").hide(0);
    $(".rus").show(0);
  });
});
