$(document).ready(function(){
  $("img.search_btn").click(function(){     /*search fade in/out*/
    $("input.search_bar").fadeToggle(400);
  });


  $("img.login_btn").click(function(){     /*login fade in*/
    $(".login").fadeIn(400);
    $("html").css({overflow:"hidden"});
  });
  $(".login").children(".glyphicon-remove").click(function(){     /*login fade out*/
    $(".login").fadeOut(400);
    $("html").css({overflow:"auto"});
  });


  $("#artist_1").click(function(){     /*artist works fade in*/
    $("#works_1").fadeIn(400);
    $("html").css({overflow:"hidden"});
  });
  $("#artist_2").click(function(){     /*artist works fade in*/
    $("#works_2").fadeIn(400);
    $("html").css({overflow:"hidden"});
  });
  $("#artist_3").click(function(){     /*artist works fade in*/
    $("#works_3").fadeIn(400);
    $("html").css({overflow:"hidden"});
  });

  $(".glyphicon-remove").click(function(){     /*artist works fade out*/
    $("#works_1").scrollTop(0);
    $("#works_2").scrollTop(0);
    $("#works_3").scrollTop(0);
    $("#works_1").fadeOut(400);
    $("#works_2").fadeOut(400);
    $("#works_3").fadeOut(400);
    $("html").css({overflow:"auto"});
  });




  $(window).scroll(function () { /*scroll + bar*/
    var scrollVal = $(this).scrollTop();
    //console.log(scrollVal);
    $("span.qScrollTop").text(scrollVal);
    if( scrollVal >= 800 ){
      $(".bar").fadeIn(400);
    }else{
      $(".bar").fadeOut(400);
    }
    if( scrollVal >= 300 ){
      $(".glyphicon-chevron-up").fadeIn(400);
    }else{
      $(".glyphicon-chevron-up").fadeOut(400);
    }
  });

  $(".glyphicon-chevron-up").click(function(){ //scrolltop
	   $("html,body").animate({scrollTop: 0}, 1000);
     return false;// 返回false可以避免在原链接后加上#
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
