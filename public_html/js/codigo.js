function ValidarNIF() {
    return (ValidarNotEmpty() && Validar9Digitos() && ValidarNoEspacios() && Validar8PrimDig());
}

function Validar8PrimDig() {
    var nif = document.getElementsByTagName("input")[0].value;
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 8);
    nums = parseInt(nums);
    var letra = nif.substring(8, 9);
    console.log(letra);
    var resto = nums % 23;
    var correcto = false;    
    if (isNaN(nums)) {
        alert("Los 8 primeros caracteres del NIF deben ser números");
    } else {
        var letrasValidas = ["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e","t"];
        
        }
        if (!correcto) {
            alert("La letra del NIF no es correcta");
        }    
    return correcto;
}

function ValidarNotEmpty() {
    var nums = document.getElementsByTagName("input")[0].value;
    var correcto = false;
    if (nums.length === 0) {
        alert("No puede dejar este campo vacio");
        correcto = true;
    }
    return !correcto;
}

function ValidarNoEspacios() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split(" ");
    var hayEspacios = false;
    if (array.length > 1)
        hayEspacios = true;
    if (hayEspacios) {
        alert("Ha introducido espacios en blanco");
    }
    return !hayEspacios;
}

function Validar9Digitos() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split("");
    var NueveDig = false;
    if (array.length !== 9)
        NueveDig = true;
    if (NueveDig) {
        alert("Debe introducir 9 dígitos");
    }
    return !NueveDig;
}


