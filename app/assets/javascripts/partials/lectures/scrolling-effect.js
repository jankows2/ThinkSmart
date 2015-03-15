/**
 * Created by sebastian1 on 12/03/15.
 */

$("#ERROReffect").ready(function () {
    var topOfOthDiv = $("#Start").offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() < topOfOthDiv) {
            $("#firstImg").show();
            $("#secondImg").hide();

        } else {
            $("#secondImg").show();
            $("#firstImg").hide();

        }
    });
});

$(".bulbScroll").ready(function (){
$(window).scroll(function() {
    var turnBulbOn = $("#startBulb").offset().top;

    var windscroll = $(window).scrollTop();
    if (windscroll > turnBulbOn){
        $('img').each(function() {

            $('#light').removeClass('active');
            $('#black').addClass('active');

        });
    } else{
        $('img').each(function() {

            $('#black').removeClass('active');
            $('#light').addClass('active');

        });
    }
}).scroll();
});