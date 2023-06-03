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

    img_change(imgvalue, img);
}