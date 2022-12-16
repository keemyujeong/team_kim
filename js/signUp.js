<<<<<<< HEAD
// 비밀번호 유효성 검사

function changePhone1(){
  const phone1 = document.getElementById("phone1").value //010
  
  if (phone1.length ===3) {
    document.getElementById("phone2").focus();
  }
}
function checkNumber(event) {
  if(event.key === '.' 
     || event.key === '-'
     || event.key >= 0 && event.key <= 9) {
    return true;
  }
  
  return false;
}



=======
>>>>>>> 1feeef7d003c8f6719f2926fdfcfc25c06cc0c86
// 비밀번호 유효성 검사 해야함


function clickSubmit(){

  var xhr = new XMLHttpRequest();
<<<<<<< HEAD

  var error= document.getElementById("error");

  error.innerText = 
  
  
    


  xhr.onreadystatechange = function(){

    if(empty('InputEmail1')){
      error.innerText ="이메일이 비어있어요";
      document.write(error.innerText);
      exit();
    } else if (empty('InputEmail2')){
      error.innerText ="이메일이 비어있어요";
      document.write(error.innerText);
      exit();

    }else (xhr.readyState==4 && xhr.status==200) {
      alert("회원가입에 성공하셨습니다!");

    }
    
=======
  xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status==200){
      alert("회원가입에 성공하셨습니다!")
    }
>>>>>>> 1feeef7d003c8f6719f2926fdfcfc25c06cc0c86
  }

  let inputEmail = document.getElementById('InputEmail1').value + "@" + document.getElementById('InputEmail2').value;
  let inputPassword = document.getElementById('InputPassword').value;
  let inputName = document.getElementById('InputName').value;
  let inputZipcode = document.getElementById('InputZipcode1').value + document.getElementById('InputZipcode2').value;
  let inputAddress = document.getElementById('InputAddress').value;
  let phonecall = document.getElementById('InputPhonecall1').value + document.getElementById('InputPhonecall2').value + document.getElementById('inputPhonecall3').value;


<<<<<<< HEAD
  //
=======
>>>>>>> 1feeef7d003c8f6719f2926fdfcfc25c06cc0c86
  xhr.open('POST', 'http://teamkim.dothome.co.kr/TeamProject/php/signupPost.php', true);

  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send(
    "name=" + inputName + "&" +
    "email=" + inputEmail + "&" +
    "password=" + inputPassword + "&" +
    "zipcode=" + inputZipcode + "&" +
    "address=" + inputAddress + "&" +
    "phonecall=" + phonecall
    );

}



function clickEmail(){
  alert("이메일로 인증번호가 전송되었습니다.")
}

function clickPhonecall(){
  alert("휴대폰 인증번호가 전송되었습니다.")
}

function searchZipcode(){
  alert("우편번호 검색창으로 이동합니다.")
<<<<<<< HEAD
}
=======
}
>>>>>>> 1feeef7d003c8f6719f2926fdfcfc25c06cc0c86
