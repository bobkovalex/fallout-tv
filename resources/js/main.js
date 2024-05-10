function openFullscreen() {
    document.documentElement.requestFullscreen();
}

$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if(state){
        $('#btn').hide();
    }else{
        $('#btn').show();
    }   
});