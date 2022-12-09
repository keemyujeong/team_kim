
function clickSubmit(){

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
      alert("회원가입에 성공하셨습니다!")
    }
  }

  var inputID = document.getElementById('InputID').value;
  var inputPassword = document.getElementById('InputPassword').value;
  var inputName = document.getElementById('InputName').value;
  var inputEmail = document.getElementById('InputEmail').value;
  var inputZipcode = document.getElementById('InputZipcode').value;
  var inputAddress = document.getElementById('InputAddress').value;
  var phonecall = document.getElementById('InputPhonecall1').value + document.getElementById('InputPhonecall2').value + document.getElementById('InputPhonecall3').value;


  xhr.open('POST', "../signupPost.php", true);

  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send(
    "id=" + inputID + "&" +
    "password=" + inputPassword + "&" +
    "name=" + inputName + "&" +
    "email=" + inputEmail + "&" +
    "zipcode=" + inputZipcode + "&" +
    "address=" + inputAddress + "&" +
    "phonecall=" + phonecall
    );

}

