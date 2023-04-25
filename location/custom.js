const checkBtn = document.querySelector('.btn');


function success(pos){
 const lat = pos.coords.latitude;
 const lon = pos.coords.longitude;
 console.log(lat + ":" + lon);
 checkBtn.addEventListener('click', function(){
  getAdr(lat, lon);
 });
}



function error(err){
 console.log('위치 정보를 확인할 수 없습니다 : ' + err.code);
}

const options = {
 enableHighAccuracy: true,
 maximumAge: 30000,
 timeout: 27000,
};



navigator.geolocation.getCurrentPosition(success, error, options);

function getAdr(la, lo){
 // console.log(la + ":" + lo);
 $.ajax({
  url : `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lo}&y=${la}`, //endpoint
  type: "GET", //methood
  headers: {
  Authorization : "KakaoAK 0c7ba39b5e28598c51c275aebe6f6e19", //rest API key 
 },
 success : function(data){
  // console.log(data);
  $(".adr").text(data.documents[0].address.address_name);
 },
 error: function(err){
  console.log(err);
 },


 });

}

