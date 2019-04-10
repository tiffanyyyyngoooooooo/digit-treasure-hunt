$(".rice").hide();
$(".maro").hide();

$("#button1").click(function(){
 $(".chicken"). toggle();
$(".rice").show();
$(".pink").hide();
$(".maro").show();

});

$(".apple").dblclick(function() {
    $(".apple").hide();
    $("body").css("background-color", "pink" );
});