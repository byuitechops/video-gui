function convert() {
    var url = document.getElementById("url").value,
        type = document.getElementById("type").value,
        size = document.getElementById("size").value,
        aspect = document.getElementById("aspect").value,
        htmlt = document.getElementById("htmlt").value,
        rtft = document.getElementById("rtft").value,
        output = document.getElementById("output"),
        embedcode = "<div class='byui-video' data-id='",
        videoid, height, width;

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

    embedcode += videoid + "' data-platform='" + type + "' data-size='" + size + "' data-ratio='" + aspect + "' data-transcriptHTML='" + htmlt + "' data-transcriptRTF='" + rtft + "' >";

    embedcode += make_iframe();

    embedcode += " </div> ";

    output.innerHTML = (embedcode);

    function make_iframe() {
        var iframe_code = "";

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
            iframe_code = "<iframe width=" + width + " height=" + height + " src='https://www.youtube.com/embed/" + videoid + "' frameborder='0 ' allowfullscreen></iframe><p>(<a href='" + htmlt + "'>HTML Transcript</a>, <a href='" + rtf + "'>RTF Transcript</a>)</p>";
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
