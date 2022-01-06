var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let dataPeliculas = [{"titulo":"Encanto","urlImgVe":"./imagenes/encanto-ve.jpg","descripcion":"The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger."},{"titulo":"Sing-2","urlImgVe":"./imagenes/sing-2-ve.jpg","descripcion":"Can-do koala Buster Moon and his all-star cast of animal performers prepare to launch a dazzling stage extravaganza in the glittering entertainment capital of the world. There's just one hitch -- he has to find and persuade the world's most reclusive rock star to join them. What begins as Buster's dream of big-time success soon becomes an emotional reminder of the power of music to heal even the most broken heart."},{"titulo":"SpiderMan-No Way Home","urlImgVe":"./imagenes/spider-man-no-way-home-spanish-ve.jpg","descripcion":"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man"},{"titulo":"The kings man","urlImgVe":"./imagenes/the-kings-man-ve.jpg","descripcion":"One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity."},{"titulo":"The Matrix Resurreciones","urlImgVe":"./imagenes/the-matrix-ve.jpg","descripcion":"To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion, is still the only way out of -- or into -- the Matrix. Neo already knows what he has to do, but what he doesn't yet know is that the Matrix is stronger, more secure and far more dangerous than ever before."}]

let gallery = document.getElementById("container");

dataPeliculas.forEach((pelicula) => {
    let fragmentPoster = new DocumentFragment();
    let div = document.createElement("div");
    let a = document.createElement("a");
    let img = document.createElement("img");
    div.setAttribute("class","gallery");
    
    a.setAttribute("target","_blank")
    a.setAttribute("href",`detalle.html?titulo=${pelicula.titulo}`)
    img.setAttribute("src",pelicula.urlImgVe)
    img.setAttribute("alt",pelicula.titulo)
    img.setAttribute("width","178");
    img.setAttribute("height","264");
 
    a.appendChild(img);
    div.appendChild(a);

    // titulo
    let titulo = new DocumentFragment();
    let divDescripcion = document.createElement("div");
    divDescripcion.setAttribute("class","desc");
    divDescripcion.innerText = pelicula.titulo;
    //
    console.log(`div`, div)
    div.appendChild(divDescripcion)
    fragmentPoster.appendChild(div);
    gallery.appendChild(fragmentPoster)
    


    

})
console.log(`gallery`, gallery)
