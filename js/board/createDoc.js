function goBack(){
    window.history.back();
}

function insertTitle(){
    var title = document.getElementById('title').value;
    var msg = document.getElementById('insertTitle');

    if(title == ''){
        msg.style.display = 'block';
        msg.innerHTML = '제목을 입력하세요';
    }else{
        msg.style.display = 'none';
    }
}