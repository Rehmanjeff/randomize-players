$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 2000);

    setTimeout(function(){
    	window.open('players.html',"_self");
    }, 3000);
 
});