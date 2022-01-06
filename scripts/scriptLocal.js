let storageSave = () => {
    let name = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let tel = document.getElementById('ftel').value;
    let dir = document.getElementById('ldir').value;
    let obser = document.getElementById('obser').value;
    let key = Date.now()
    key = key.toString()
    key = key.slice(-3);
    if (name.length < 3 || name.length > 10){
        return console.log("Nombre demasiado corto/largo")
    }
    if (lname.length < 3 || lname.length > 10){
        return console.log("Apellido demasiado corto/largo")
    }
    if (tel.length < 7 || tel.length > 13){
        return console.log("Telefono entre 7 y 13 caracteres")
    }
    if (dir.length < 3 || dir.length > 19){
        return console.log("Direccion demasiado corto/largo")
    }
    if (obser.length < 3){
        return console.log("Favor escriba mas informacion")
    }
    const registro = {
        name : name,
        lastName : lname,
        tel : tel,
        dir : dir,
        obser:obser
    }
    window.localStorage.setItem(key,JSON.stringify(registro)); 
    console.log("guardado exitoso")
    return alert("Guardado exitoso")
}