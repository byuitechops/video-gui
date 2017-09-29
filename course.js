/********************************************************
    The purpose of course.js is to house only the JavaScript
    specific to an individual course. The online.js
    houses all the default JavaScript.
********************************************************/
/* DO NOT DELETE OR MODIFY THIS SECTION */
/* Append Script Tag for Online.js to the Body Tag */
var onlineJs = document.createElement("script");
onlineJs.src = 'https://content.byui.edu/integ/gen/00134d04-34d1-47b8-9242-c29059c522ee/0/online.js';
document.body.appendChild(onlineJs);


//        https://www.youtube.com/watch?v=dQw4w9WgXcQ
//        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
// <iframe src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/29018071/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player_1485805514&amp;entry_id=0_vbiqeh9g&amp;flashvars[streamerType]=auto" width="480" height="270" allowfullscreen="" frameborder="0"></iframe>
var videos = document.getElementsByClassName("byui-video");
for (var i = 0; i < videos.length; i++) {

    var height, width;
    switch (videos[i].dataset.ratio) {
        case "16-9":
            switch (videos[i].dataset.size) {
                case "sm":
                    height = 180;
                    width = 320;
                    break;
                case "med":
                    height = 270;
                    width = 480;
                    break;
                case "lg":
                    height = 360;
                    width = 640;
                    break;
                default:
                    break;
            }
            break;

        case "4-3":
            switch (videos[i].dataset.size) {
                case "sm":
                    height = 240;
                    width = 320;
                    break;
                case "med":
                    height = 360;
                    width = 480;
                    break;
                case "lg":
                    height = 480;
                    width = 640;
                    break;
                default:
                    break;
            }
            break;
    }
    console.log(videos[i].dataset.link);
    var download_it;
    if (videos[i].dataset.download == "true"){
        download_it = 33020032;
    }
    else { download_it = 29018071};
    if (videos[i].dataset.link == "false") {
        if (videos[i].dataset.platform == "youtube") {
            videos[i].innerHTML = "<iframe width=" + width + " height=" + height + " src='https://www.youtube.com/embed/" + videos[i].dataset.id + "' frameborder='0 ' allowfullscreen></iframe><p>(<a href='" + videos[i].dataset.transcriptHTML + "'>HTML Transcript</a>, <a href='" + videos[i].dataset.transcriptRTF + "'>RTF Transcript</a>)</p>";
        } else if (videos[i].dataset.platform == "kaltura") {
            videos[i].innerHTML = "<iframe width=" + width + " height=" + height + " src='https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/" + download_it + "/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player_1485805514&amp;entry_id=" + videos[i].dataset.id + "&amp;flashvars[streamerType]=auto' frameborder='0 ' allowfullscreen=''></iframe><p>(<a href='" + videos[i].dataset.transcriptHTML + "'>HTML Transcript</a>, <a href='" + videos[i].dataset.transcriptRTF + "'>RTF Transcript</a>)</p>";
        }
    } else {
        if (videos[i].dataset.platform == "youtube") {
            videos[i].innerHTML = "<a href='https://www.youtube.com/watch?v=" + videos[i].dataset.id + "' >" + videos[i].dataset.title + "</a> (<a href='" + videos[i].dataset.transcriptHTML + "'>HTML Transcript</a>, <a href='" + videos[i].dataset.transcriptRTF + "'>RTF Transcript</a>)";
        } else if (videos[i].dataset.platform == "kaltura") {
            videos[i].innerHTML = "<a href='https://video.byui.edu/media/" + videos[i].dataset.id + "' >" + videos[i].dataset.title + "</a> (<a href='" + videos[i].dataset.transcriptHTML + "'>HTML Transcript</a>, <a href='" + videos[i].dataset.transcriptRTF + "'>RTF Transcript</a>)";
        }
    }

}
/* Add Course Specific JavaScript Below */
