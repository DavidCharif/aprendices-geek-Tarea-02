let storageSave = () => {
    let name = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let tel = document.getElementById('ftel').value;
    let dir = document.getElementById('ldir').value;
    let obser = document.getElementById('obser').value;
    let key = Date.now()
    key = key.toString()
    key = key.slice(-3);
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