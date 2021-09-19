import $ from 'jquery';
export const scrolltofirstblock = () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#clients").offset().top - 50
    }, 0);

}

$(window).scroll(()=>{
    if($("#navbar").length > 0){
    if($("#navbar").offset().top > 10)
        $("#navbar").addClass("transition-bgcolor");
    else
        $("#navbar").removeClass("transition-bgcolor");
    }
});
