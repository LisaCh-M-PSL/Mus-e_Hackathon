document.addEventListener("DOMContentLoaded", () => {
  console.log(`body has ${document.body.childElementCount} children`);
  let blurimage = (image) =>{
    image.style.opacity = "0.7";
  }
  let normalimage = (image) =>{
    image.style.opacity = "1";
  }

function isMobile() {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!(isMobile())){
  const images = document.querySelectorAll("img.blur");
  images.forEach((image)=>{ 
    image.addEventListener('mouseover', ()=> blurimage(image))
  })
  images.forEach((image)=>{ 
    image.addEventListener('mouseout', ()=> normalimage(image))
  })
}

if (isMobile()){
  const images = document.querySelectorAll("img.blur");
  images.forEach((image)=>{ 
    image.addEventListener('touchstart', ()=> blurimage(image))
  })
  images.forEach((image)=>{ 
    image.addEventListener('touchend', ()=> normalimage(image))
  })
}

});