// Typing Effect
const text = "Selamat ulang tahun sayangg🤍 Semoga di usia ini kamu makin kuat, bukan cuma fisik, tapi juga mental. Semoga setiap usaha yang kamu jalanin pelan-pelan nemuin jalannya, dan setiap kerja keras kamu dibalas dengan rezeki yang cukup, berkah, dan bikin tenang. Aku doain kamu selalu dikasih kesehatan, pikiran yang jernih buat ambil keputusan, dan hati yang sabar buat ngejalanin proses karena aku tahu, kamu bukan tipe yang nyerah di tengah jalan. Semoga karier kamu terus naik, rezeki kamu lancar dari arah yang baik-baik, dan apa pun yang lagi kamu perjuangkan sekarang, suatu hari bisa kamu liat ke belakang sambil bilang 'ternyata aku bisa buat lewatin smua ini.' Kayak si Madrid selalu bangkit, kamu juga gitu. gak banyak drama, gak banyak bicara, tapi konsisten sampai akhirnya menang. Terima kasih sudah jadi kamu yang berusaha, yang tanggung jawab, dan yang tetap jalan meski capek. Aku disini selalu, jadi support system kamu hehe, Love you most. Love you more than yesterday. And tomorrow? Still more sayangg. -pacarmu🤍⚽";
let i=0;
function typingEffect(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typingEffect,45);
  }
}
typingEffect();

// Gallery fade-in
window.addEventListener("load",()=>{
  const photos=document.querySelectorAll(".photo");
  photos.forEach((photo,index)=>{ setTimeout(()=>photo.classList.add("show"),index*200); });
});

// Photo click & special plays music
const photos=document.querySelectorAll(".photo");
photos.forEach(photo=>{
  photo.addEventListener("click",()=>{
    photos.forEach(p=>{if(p!==photo)p.classList.remove("active");});
    photo.classList.toggle("active");
    if(photo.classList.contains("special")){
      const music=document.getElementById("music");
      music.currentTime=0;
      music.play();
    }
  });
});

// Surprise
function surprise(){
  const music=document.getElementById("music");
  music.volume=0;
  music.play();
  let vol=0;
  const fadeIn=setInterval(()=>{
    vol+=0.02;
    if(vol>=1) clearInterval(fadeIn);
    music.volume=vol;
  },100);
  document.getElementById("surprisePhoto").style.display="block";
  document.getElementById("surprisePhoto").style.animation="fadeZoom 0.8s ease forwards";
  confetti({ particleCount:200, spread:120, origin:{y:0.6} });
}

// Cards popup
const cards=document.querySelectorAll(".card");
const popupOverlay=document.getElementById("popupOverlay");
const popupMessage=document.getElementById("popupMessage");
const closePopup=document.getElementById("closePopup");
cards.forEach(card=>{
  card.addEventListener("click",()=>{
    popupMessage.innerHTML=card.dataset.message;
    popupOverlay.style.display="flex";
    confetti({ particleCount:50, spread:70, origin:{y:0.5} });
    card.classList.add("active-glow");
    setTimeout(()=>card.classList.remove("active-glow"),800);
  });
});
closePopup.addEventListener("click",()=>popupOverlay.style.display="none");
popupOverlay.addEventListener("click",(e)=>{if(e.target===popupOverlay) popupOverlay.style.display="none";});
