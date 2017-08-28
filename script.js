function convert() {
    var url = document.getElementById("url").value,
        type = document.getElementById("type").value,
        size = document.getElementById("size").value,
        aspect = document.getElementById("aspect").value,
        htmlt = document.getElementById("htmlt").value,
        rtft = document.getElementById("rtft").value,
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

    embedcode += videoid + "' data-platform='" + type + "' data-size='" + size + "' data-ratio='" + ar + "' data-transcriptHTML='" + htmlt + "' data-transcriptRTF='" + rtft + "' ></div> ";

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
