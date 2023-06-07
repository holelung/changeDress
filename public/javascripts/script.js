

window.onload = function(){
  img_change("hair",getCookie("hair"));
  img_change("clothes",getCookie("clothes"));
  img_change("accessory",getCookie("accessory"));
  img_change("glass",getCookie("glass"));
}




//아이템 추가 공백란 방지
document.getElementById('add_item_form').addEventListener('submit', function(event) {
  var imgInput = document.getElementsByName('img')[0];

  if (imgInput.value.trim() === '') {
    event.preventDefault(); // 폼 제출을 막음
    alert('파일을 업로드 해주세요!');
  }
});

const charaParts = [...document.querySelectorAll(".chara-parts")];

//이미지 링크 변경
function img_change(id, index){
    var parts_img = charaParts.find(element => element.dataset.value == id)
    parts_img.src = `${index}`
}

function click_item(id){
    var customImg = document.querySelector("#custom_img");
    var imgSrc = customImg.src;
    var imgvalue = customImg.dataset.value;
    console.log(imgvalue)
    console.log(imgSrc)
    console.log(id)
    var img = id

    setCookie(imgvalue, img, 1);
    img_change(imgvalue, img);
}

//쿠키 설정
function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);

  var cookie_value = escape(value) + ((days == null) ? '': ';expires=' + exdate.toUTCString())
  document.cookie = cookie_name + '=' + cookie_value;
}

function getCookie(cookie_name){
  var x, y;
  var val = document.cookie.split(';');

  for(var i = 0; i< val.length; i++){
    x= val[i].substr(0,val[i].indexOf('='));
    y= val[i].substr(val[i].indexOf('=')+1);
    x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
    if (x== cookie_name){
      return unescape(y);
    }
  }
}

//파일 다운로드
document.querySelector(".download-btn").addEventListener("click",function (){
  html2canvas(document.querySelector("#capture")).then(canvas => {
    
    saveAs(canvas.toDataURL("image/png"), "card.png")
  })
})
function saveAs(uri, filename){
  var link = document.createElement("a");
  
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



/* function printChara(div){
  html2canvas(div).then(function(canvas){
    div.appendChild(canvas);

     var myCharacter = canvas.toDataURL();
    downloadURI(myCharacter, 'myCharacter.png') 
  });
}

function downloadURI(uri, name){
  var link = document.createElement("a")
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}


 */