import $ from 'jquery';
var currentblock = 0;
const Ids = require('../mocks/homepageiDs').Ids;
var clickedbutton = false; 
var interval;
$(document).ready(()=>{
    if(!clickedbutton){
    interval = setInterval(() => {
        var flag = false;
        if(currentblock>0){
            if(!!$(`#` +Ids[currentblock-1]).length)
                flag = $(`#` +Ids[currentblock-1]).offset().top == window.pageYOffset;
        }
        else{
            console.log($(`#` +Ids[currentblock]).length)
            if(!!$(`#` +Ids[currentblock]).length)
                flag = 0 == window.pageYOffset;  
        }

        if(flag){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#` +Ids[currentblock]).offset().top
            }, 2000);
            currentblock ++ ;   
        }
        else clearInterval(interval);
        if(currentblock >= Ids.length) clearInterval(interval)

    },6000);
    }
    
});
export const scrolltofirstblock = () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#whoweare").offset().top
    }, 2000);
    clickedbutton=true;
    clearInterval(interval);
    console.log('clicked');
    currentblock=1;
    var interval1 = setInterval(() => {
        var flag = true;
        console.log($(`#` +Ids[currentblock-1]).offset().top - window.pageYOffset)
        if(currentblock>0){
            flag = $(`#` +Ids[currentblock-1]).offset().top == window.pageYOffset;   
        }
        else{
            flag = 0 == window.pageYOffset;   
        }
        console.log(flag);
        if(flag){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`#` +Ids[currentblock]).offset().top
            }, 2000);
            currentblock ++ ;   
        }
        else clearInterval(interval1);
        if(currentblock >= Ids.length) clearInterval(interval1)

    },6000);
}