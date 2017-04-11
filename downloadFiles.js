// Again, from:
// https://stackoverflow.com/questions/3749231/download-file-using-javascript-jquery
function downloadURI(uri, number) {
    var link = document.createElement("a");
    link.download = true;
    link.href = uri;
    link.click();
}

// Grab the source file node, it will have the changing src to download
var audioFileNode = document.querySelector("#jp_audio_0");

for (var i = 1; i <= 5; i++) {
    // Click on Program <n>
    document.querySelector("#p_block" + i).childNodes[1].click();
    // Download the new source
    downloadURI(audioFileNode.src);
}

