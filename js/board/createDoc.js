function checkContents(){    
    window.location.href = './postContents.html';
    
    var title = document.getElementById('title');
    var text = document.getElementById('contents');
    // var msg = document.getElementById('insertTitle');
    var check = document.docForm;

    title.required == true;
    text.required == true;

    if(title == '' || text == ''){
        alert('제목 또는 내용을 입력하세요');
    }
}