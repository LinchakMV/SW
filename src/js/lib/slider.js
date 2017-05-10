function slider(){
    $(document).ready(function() {
          $(".slider").each(function() { 
          var repeats = 3,
          interval = 3,
          repeat = true,
          slider = $(this),
          repeatCount = 0,
          elements = $(slider).find("li").length;

          $(slider)
          .append("<div class='nav'></div>")
          .find("li").each(function() {
          $(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>"); 
          $(this).attr("data-slide", $(this).index());
          })
          .end()
          .find("span").first().addClass("on");
          // add timeout

          if (repeat) {
          repeat = setInterval(function() {
            if (repeatCount >= repeats - 1) {
            window.clearInterval(repeat);
            }

            var index = $(slider).find('.on').data("slide"),
            nextIndex = index + 1 < elements ? index + 1 : 0;

            sliderJS(nextIndex, slider);

            repeatCount += 1;
            }, interval * 1000);
        }
        $(document).on("click","#next",function(){    
            var index = $(slider).find('.on').data("slide"),
            nextIndex = index + 1 < elements ? index + 1 : 0;
            sliderJS(nextIndex, slider);
        });
        $(document).on("click","#prev",function(){
            var index = $(slider).find('.on').data("slide"),
            nextIndex = index - 1 < elements ? index - 1 : 2;
            sliderJS(nextIndex, slider);
        })
    });
 });

    function sliderJS(index, slider) { 
        var ul = $(slider).find("ul"), 
        bl = $(slider).find("li[data-slide=" + index + "]"),
        step = $(bl).width()*2; 

        $(slider)
        .find("span").removeClass("on")
        .end()
        .find("span[data-slide=" + index + "]").addClass("on");

        $(ul).animate({
        marginLeft: "-" + step * index
        }, 500); 
    };
}
module.exports = slider;