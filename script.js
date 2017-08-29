function convert() {
    var url = document.getElementById("url").value,
        type = document.getElementById("type").value,
        size = document.getElementById("size").value,
        aspect = document.getElementById("aspect").value,
        htmlt = document.getElementById("htmlt").value,
        rtft = document.getElementById("rtft").value,
        link = document.getElementById("link").checked,
        download = document.getElementById("download").checked,
        title = document.getElementById("videotitle").value,
        output = document.getElementById("output"),
        embedcode = "<div class='byui-video' data-id='",
        videoid, height, width;

    if (url == "") {
        alert("URL required");
        return;
    } else if (title == "") {
        alert("Video title required");
        return;
    } else if (htmlt == "") {
        alert("HTML transcript URL required");
        return;
    } else if (rtft == "") {
        alert("RTF transcript URL required");
        return;
    }


    switch (type) {
        case "youtube":
            videoid = url.split("v=").pop();
            break;
        case "kaltura":
            videoid = url.split("/").pop();
            break;
        default:
            break;
    }

    embedcode += videoid + "' data-platform='" + type + "' data-size='" + size + "' data-ratio='" + aspect + "' data-transcriptHTML='" + htmlt + "' data-transcriptRTF='" + rtft + "' data-link='" + link + "' data-download='" + download + "' data-title='" + title + "'>";

    embedcode += make_iframe();

    embedcode += " </div> ";

    output.innerHTML = (embedcode);

    function make_iframe() {

        var iframe_code = "";

        if (link == true) {
            if (type == "youtube") {
                iframe_code = "<a href='https://www.youtube.com/watch?v=" + videoid + "' >" + title + "</a> (<a href='" + htmlt + "'>HTML Transcript</a>, <a href='" + rtft + "'>RTF Transcript</a>)";
            } else if (type == "kaltura") {
                iframe_code = "<a href='https://video.byui.edu/media/" + videoid + "' >" + title + "</a> (<a href='" + htmlt + "'>HTML Transcript</a>, <a href='" + rtft + "'>RTF Transcript</a>)";
            }
            return iframe_code;
        }


        var height, width;
        switch (aspect) {
            case "16-9":
                switch (size) {
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
                switch (size) {
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
        if (type == "youtube") {
            iframe_code = "<iframe width=" + width + " height=" + height + " src='https://www.youtube.com/embed/" + videoid + "' frameborder='0 ' allowfullscreen></iframe><p>(<a href='" + htmlt + "'>HTML Transcript</a>, <a href='" + rtft + "'>RTF Transcript</a>)</p>";
        } else if (type == "kaltura") {
            iframe_code = "<iframe width=" + width + " height=" + height + " src='https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/29018071/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player_1485805514&amp;entry_id=" + videoid + "&amp;flashvars[streamerType]=auto' frameborder='0 ' allowfullscreen=''></iframe><p>(<a href='" + htmlt + "'>HTML Transcript</a>, <a href='" + rtft + "'>RTF Transcript</a>)</p>";
        }
        return iframe_code;
    }
}



function copy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function reverse_parse() {
    var input = document.getElementById("output").value;
    var url = document.getElementById("url"),
        type = document.getElementById("type"),
        size = document.getElementById("size"),
        aspect = document.getElementById("aspect"),
        htmlt = document.getElementById("htmlt"),
        rtft = document.getElementById("rtft"),
        link = document.getElementById("link"),
        title = document.getElementById("videotitle"),
        download = document.getElementById("download");

    // NEEDS ERROR HANDLING (CHECK FOR EACH DATA TAG //
    title.value = input.split("title='")[1].split("'")[0];
    url.value = input.split("id='")[1].split("'")[0];
    type.value = input.split("platform='")[1].split("'")[0];
    size.value = input.split("size='")[1].split("'")[0];
    aspect.value = input.split("ratio='")[1].split("'")[0];
    htmlt.value = input.split("HTML='")[1].split("'")[0];
    rtft.value = input.split("RTF='")[1].split("'")[0];
    if (input.split("link='")[1].split("'")[0] == "true") {
        link.checked = true;
    } else {
        link.checked = false;
    }
    if (input.split("download='")[1].split("'")[0] == "true") {
        download.checked = true;
    } else {
        download.checked = false;
    }

}




function easteregg() {
    document.getElementById("egg").src += "?&autoplay=1&t=2s";
}
/*
<div class="byui-video" data-vidid="dQw4w9WgXcQ" data-source="youtube" data-height="315" data-width="860">
<b>VIDEO DO NOT DELETE OR YOUR COURSE WILL EXPLODE</b>
</div>

<div class="byui-video" data-vidid="0_8o2fgc35" data-source="kaltura" data-height="270" data-width="480">
<b>VIDEO DO NOT DELETE OR YOUR COURSE WILL EXPLODE</b>
</div>


*/
