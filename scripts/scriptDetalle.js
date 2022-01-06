let detalleDIC = [{
    "titulo":"Encanto",
    "año":"2021",
    "director/es":"Byron Howard, Jared Bush",
    "descripcion":"Una joven colombiana puede ser la última esperanza para su familia, cuando descubre que la magia que rodea a Encanto, un lugar encantado que bendice a los niños con dones únicos, se encuentra en serio peligro.",
},{
    "titulo":"sing-2",
    "año":"2021",
    "director/es":"Garth Jennings",
    "descripcion":"Buster Moon y su elenco de animales artistas se preparan para lanzar un deslumbrante espectáculo escénico en la capital mundial del entretenimiento. Solo hay un problema: debe convencer a la estrella de rock más solitaria del mundo de unirse a ellos.",
},{
    "titulo":"SpiderMan-No Way Home",
    "año":"2021",
    "director/es":"Jon Watts",
    "descripcion":"Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.",
},{
    "titulo":"The kings man",
    "año":"2021",
    "director/es":"Matthew Vaughn",
    "descripcion":"Un grupo formado por los tiranos y las mentes criminales más malvadas de la historia se une para desencadenar una guerra que matará a millones de personas. Un hombre tendrá que luchar contra reloj para detenerlos.",
},{
    "titulo":"The Matrix Resurreciones",
    "año":"2021",
    "director/es":"Lana Wachowski",
    "descripcion":"Acosado por extraños recuerdos, la vida de Neo toma un giro inesperado al encontrarse, nuevamente, dentro de la Matrix.",
}]
const urlParams = new URLSearchParams(window.location.search);
let titulo = urlParams.get('titulo')

let funcDetalle = titulo => {
    detalleDIC.forEach((pelicula) => {
        if (pelicula.titulo === titulo){
            let detalle = document.getElementById("detalle");
            let fragment = new DocumentFragment();
            let nombre = document.createElement("p");
            let dir = document.createElement("p");
            let year = document.createElement("p");
            let desc = document.createElement("p");
            nombre.innerText = `Titulo: ${titulo}`;
            fragment.appendChild(nombre);
            year.innerText=`Año de estreno : ${pelicula.año}`;
            fragment.appendChild(year);
            desc.innerText = `Descripcion: ${pelicula.descripcion}`;
            fragment.appendChild(desc)
            dir.innerText = `Director/es : ${pelicula["director/es"]}`;
            fragment.appendChild(dir)
            detalle.appendChild(fragment);
        }
    })
    console.log(detalleDIC[0].año)
    
}
funcDetalle(titulo);
