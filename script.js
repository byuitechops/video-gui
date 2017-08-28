function convert() {
    var url = document.getElementById("url").value,
        type = document.getElementById("type").value,
        size = document.getElementById("size").value,
        aspect = document.getElementById("aspect"),
        htmlt = document.getElementById("htmlt"),
        rtft = document.getElementById("rtft"),
        output = document.getElementById("output"),
        embedcode = "<div class='byui-video' data-id='",
        videoid, height, width, ar;

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

    embedcode += videoid + "' data-platform='" + type + "' ";

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
            ar = "16-9";
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
            ar = "4-3";
                break;
    }



    embedcode += "data-height='" + height + "' data-width='" + width + "' data-ratio='" + ar + "' data-transcriptHTML='" + htmlt + "' data-transcriptRTF='" + rtft + "' ></div> ";

    output.innerHTML = (embedcode);
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
