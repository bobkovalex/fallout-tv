function openFullscreen() {
    document.documentElement.requestFullscreen();
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
        }, 10000);
        
    });
});


$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (state) {
        $('#btn').hide();
    } else {
        $('#btn').show();
    }
});