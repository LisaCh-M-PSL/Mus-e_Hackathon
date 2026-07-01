document.addEventListener("DOMContentLoaded", () => {
  console.log(`body has ${document.body.childElementCount} children`);
  let blurimage = (image) =>{
    image.style.opacity = "0.4";
  }
  let add_credit = (txt) =>{
    txt.style.opacity = 1;
  }

  let normalimage = (image) =>{
    image.style.opacity = 1;
  }
  let remove_credit = (txt) =>{
    txt.style.opacity = 0;
  }

function isMobile() {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!(isMobile())){
 const photos = document.querySelectorAll(".Photo");

 photos.forEach((photo) => {
  const image = photo.querySelector("img.blur");
  const credit = photo.querySelector(".credit");

  image.addEventListener("mouseover", () => {
    credit.style.opacity = "1";
    blurimage(image);
  });

  image.addEventListener("mouseout", () => {
    credit.style.opacity = "0";
    normalimage(image)
  });
});
};

if (isMobile()){
  const photos = document.querySelectorAll(".Photo");

 photos.forEach((photo) => {
  const image = photo.querySelector("img.blur");
  const credit = photo.querySelector(".credit");

  image.addEventListener("touchstart", () => {
    credit.style.opacity = "1";
    blurimage(image);
  });

  image.addEventListener("touchend", () => {
    credit.style.opacity = "0";
    normalimage(image)
  });
})
}
});