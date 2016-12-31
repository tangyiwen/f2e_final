$(document).ready(function(){
  $("img.search_btn").click(function(){     /*search fade in/out*/
    $("input").fadeToggle(400);
  });

  var el = document.querySelectorAll('.hamburger'); /*.active添加*/
    for(i = 0; i <= el.length; i++) {
      el[i].addEventListener('click', function(){
        this.classList.toggle('active');
        $("nav").fadeToggle();  /*ham fade in/out*/
      }, false);
    } /*後面加東西的話後面會死掉*/
});
