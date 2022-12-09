
function clickSubmit(){

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
      document.getElementById('InputID').innerHTML = xhr.responseText;
      document.getElementById('InputPassword2').innerHTML = xhr.responseText;
      document.getElementById('InputName').innerHTML = xhr.responseText;
      document.getElementById('InputEmail').innerHTML = xhr.responseText;
      document.getElementById('InputZipcode').innerHTML = xhr.responseText;
      document.getElementById('InputAddress').innerHTML = xhr.responseText;
      document.getElementById('InputPhonecall1').innerHTML = xhr.responseText;
      document.getElementById('InputPhonecall2').innerHTML = xhr.responseText;
      document.getElementById('InputPhonecall3').innerHTML = xhr.responseText;

      xhr.open('POST', './')
    }
  }
}

