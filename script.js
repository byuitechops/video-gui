function convert() {
    var url = document.getElementById("url").value,
        type = document.getElementById("type").value,
        size = document.getElementById("size").value,
        output = document.getElementById("output"),
        embedcode = "<div class='byui-video' data-vidid='",
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

    embedcode += videoid + "' data-source='" + type + "'";

    switch (size) {
        case "sm":
            height = 180;
            width = 320;
            break;
        case "med":
            height = 225;
            width = 400;
            break;
        case "lg":
            height = 360;
            width = 640;
            break;
        default:
            break;
    }
    embedcode += "data-height='" + height + "' data-width='" + width + "'><b>VIDEO DO NOT DELETE OR YOUR COURSE WILL EXPLODE</b> </div> ";
    output.innerHTML = (embedcode);
}

function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

/*
<div class="byui-video" data-vidid="dQw4w9WgXcQ" data-source="youtube" data-height="315" data-width="860">
<b>VIDEO DO NOT DELETE OR YOUR COURSE WILL EXPLODE</b>
</div>

<div class="byui-video" data-vidid="0_8o2fgc35" data-source="kaltura" data-height="270" data-width="480">
<b>VIDEO DO NOT DELETE OR YOUR COURSE WILL EXPLODE</b>
</div>


*/
