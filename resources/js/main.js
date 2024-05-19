function openFullscreen() {
    document.documentElement.requestFullscreen();
}

function muteToggle() {
    const videoPlayer = $('#video-player');
    videoPlayer.prop('muted', !videoPlayer.prop('muted'));
    if(videoPlayer.prop('muted')){
        $('#volume-btn').html('<i class="fa-solid fa-volume-xmark"></i>');
    }else{
        $('#volume-btn').html('<i class="fa-solid fa-volume-high"></i>');
    }
}

$(document).ready(function () {
    var counter = 1;
    const videoPlayer = $('#video-player');
    const videoLoading = $('#video-loading');

    videoPlayer.on('ended', function () {
        if (counter >= 8) {
            counter = 1;
        }
        videoPlayer.hide();
        videoLoading.show();
        setTimeout(function () {
            videoPlayer.show();
            videoPlayer.attr('src', `resources/video/f4_${counter++}.mp4`);
        }, 15000);
        
    });
});


$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (state) {
        $('#btn-container').hide();
    } else {
        $('#btn-container').show();
    }
});