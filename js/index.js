$(function(){
    $("#nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });



    var n=0;
    var dis=0;
    setInterval(function(){
        n=1;
        dis=(-1)*n*980;
        
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-980"},400);
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-1960"},400);
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-2940"},400);
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-3920"},400);
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-4900"},400);
        $(".slide").delay(2000);
        $(".slide").animate({marginTop:"-5880"},400);
        $(".slide").delay(2500);
        $(".slide").animate({marginTop:"0"},400);

    });


    $(".cont2 li a").hover(function(){
        $(this).stop().animate({marginTop:"-343"},500);
    },function(){
        $(this).stop().animate({marginTop:"0"},500);
    });

    var i=0;
    $(".cont3 .btn").click(function(e){
        e.preventDefault();
        if(i<1){
            i++;
            $(".cont3 ul").eq(i).show();
            console.log(i)
        }else{
            $(".cont3 ul").eq(2).show();
            $(".cont3 .btn").hide();
        }
    });



});