var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("textArea1");
    textArea.value = e.target.result;
};
reader.readAsText(file);
