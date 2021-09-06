$(function () {
  $(".loading").hide();
  $(".home").show()
  $(".menu li").click(function () {
    $(".indexInner").hide()
    $(this).addClass("active").siblings("li").removeClass("active");
    var index = $(this).index();
    if(index==0){
      setTimeout(function () {
        $(".nav").show();
      }, 2000);
    }else{
      $(".nav").hide();
    }
    showPageByIndex(index);
  });

  $(".nav_group div").click(function () {
    var index = $(this).index();
    console.log(index);
    $(".index"+index).show();
  });
  $(".view_btn").click(function () {
    var m=new RTP.PinchZoom($('.map_img'), {});
    $(".map").show();
  });
  $(".close").click(function () {
    $(".map").hide();
  });
  $(".index_close").click(function () {
    $(".indexInner").hide();
  });
  $(".solutions>div").click(function () {
    var index=$(this).index()+1;
    $(".solutionsInner img").attr('src','images/solution/s'+index+'.jpg')
    $(".solutionsInner").show();
    var a=new RTP.PinchZoom($('#pinch-zoom'), {});
  });
  $(".solutionsInner").click(function () {
    $(this).hide();
    $(this).html('<div id="pinch-zoom"><img src="images/solution/s1.jpg" alt=""></div>');
  });
  $(".slogan").one("webkitAnimationEnd", function () {
    $(".index_bg,.title,.slogan").addClass("step2");
    setTimeout(function () {
      $(".nav").show();
    }, 1000);
  });
  $(".preimg img").click(function(){
    var src=$(this).attr('src');
    $(".solutionsInner img").attr('src',src)
    $(".solutionsInner").show();
    var a=new RTP.PinchZoom($('#pinch-zoom'), {});
  })
});
function showPageByIndex(index) {
  $(".home,.solution,.guide,.city,.restaurant,.contact").hide();
  switch (index) {
    case 0:
      $(".home").show();
      break;
    case 1:
      $(".solution").show();
      break;
    case 2:
      $(".guide").show();
      break;
    case 3:
      $(".city").show();
      break;
    case 4:
      $(".restaurant").show();
      break;
      case 5:
        $(".contact").show();
        break;
  }
}
