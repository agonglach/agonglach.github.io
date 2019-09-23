
function fileToTextBox(var myFile) {
  
      //var file = document.getElementById("myFile").files[0];

      var reader = new FileReader();
      reader.onload = function (e) {
      var textArea = document.getElementById("text1");
      textArea.value = e.target.result;
  
      reader.readAsText(myFile);
      alert("Your function is being called");
}  

  
 function message() {
   alert("Your function was called");
 }
