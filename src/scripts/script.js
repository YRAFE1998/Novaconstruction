import $ from 'jquery';
export const scrolltofirstblock = () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#whoweare").offset().top
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
