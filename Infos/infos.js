document.addEventListener("DOMContentLoaded", () => {
  console.log(`body has ${document.body.childElementCount} children`);
  let blurimage = (image) =>{
    image.style.opacity = "0.9";
  }

  const images = document.querySelectorAll("img");
  images.forEach((image)=>{ 
    image.addEventListener('click', ()=> blurimage(image))
  }
)
});