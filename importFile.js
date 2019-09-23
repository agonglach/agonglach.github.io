var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("text1");
    textArea.value = e.target.result;
};
reader.readAsText(file);
