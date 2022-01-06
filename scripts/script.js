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

let dataPeliculas = [{"titulo":"Encanto","urlImgVe":"./imagenes/encanto-ve.jpg"},{"titulo":"Sing-2","urlImgVe":"./imagenes/sing-2-ve.jpg"},{"titulo":"SpiderMan-No Way Home","urlImgVe":"./imagenes/spider-man-no-way-home-spanish-ve.jpg"},{"titulo":"The kings man","urlImgVe":"../imagenes/the-kings-man-ve.jpg"},{"titulo":"The Matrix Resurreciones","urlImgVe":"./imagenes/the-matrix-ve.jpg"}]

let gallery = document.getElementById("container");

dataPeliculas.forEach((pelicula) => {
  console.log(pelicula.titulo)
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
