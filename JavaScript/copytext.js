function copyText() {

    var copyTargetArea = document.getElementById("outputText");

    copyTargetArea.select();

    document.execCommand("copy");

    console.log("コピーできました! -> " + copyTargetArea.value);
    
}