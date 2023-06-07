Kakao.init('842634aba5cdca025b563311f67b6eb6');
Kakao.isInitialized();

console.log(Kakao.isInitialized())

/* 
var url = document.getElementById('input-url').value;


document.querySelector(".share-btn").addEventListener("click",function (){
  html2canvas(document.querySelector("#capture")).then(canvas => {
    
    saveAs(canvas.toDataURL("image/png"), "card.png")
  })
})

Kakao.Share.scrapImage({
  imageUrl: url,
})
  .then(function(response) {
    console.log(response.infos.original.url);
  })
  .catch(function(error) {
    console.log(error);
  });

Kakao.Share.createDefaultButton({
  container: "#create-kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: shareText[level].title,
    description: shareText[level].description,
    imageUrl: shareText[level].imageUrl,
    link: {
      mobileWebUrl: `${baseUrl}?level=${level}&shared=1`,
      webUrl: `${baseUrl}?level=${level}&shared=1`,
    }
  }   
}) */