window.onload = function()
{
    pageScroll()
} 

function pageScroll() {
    // console.log(document.getElementById("patata").scrollLeft);
    var element = document.getElementById("patata");
    var maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollLeft += 5;
    if (element.scrollLeft >= maxScrollLeft)
    {
        element.scrollLeft = 0;
        
        scrolldelay = setTimeout(pageScroll,1000);
    }
    else
    {
        scrolldelay = setTimeout(pageScroll,10);
    }
    


}













