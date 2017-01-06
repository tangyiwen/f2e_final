$(document).ready(function(){
  $("img.search_btn").click(function(){     /*search fade in/out*/
    $("input.search_bar").fadeToggle(400);
  });

  $("img.login_btn").click(function(){     /*login fade in*/
    $(".login").fadeIn(400);
  });
  $("img.leave_login").click(function(){     /*login fade out*/
    $(".login").fadeOut(400);
  });


  $(window).scroll(function () { /*scroll + bar*/
    var banner_h = $("#banner").attr("height");
    var scrollVal = $(this).scrollTop();
    //console.log(scrollVal);
    console.log($("#banner").attr("height"));
    $("span.qScrollTop").text(scrollVal);
    if( scrollVal >= 800 ){
      $(".bar").fadeIn(400);
    }else{
      $(".bar").fadeOut(400);
    }
  });

  $(".glyphicon-chevron-down").click(function(){ //scrolldown
	$("html,body").animate({scrollTop: $(".container").offset().top}, 1000);
  return false;// 返回false可以避免在原链接后加上#
});

  var el = document.querySelectorAll('.hamburger'); /*.active添加*/
    for(i = 0; i <= el.length; i++) {
      el[i].addEventListener('click', function(){
        this.classList.toggle('active');
        $("nav").fadeToggle();  /*ham fade in/out*/
      }, false);
    } /*後面加東西的話後面會死掉*/
});
