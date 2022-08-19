const inputTexto = document.querySelector('.input-texto');
const mensaje = document.querySelector('.mensaje');

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

function btnEncriptar(){
    let texto = inputTexto.value;
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    mensaje.innerHTML = textoEncriptado;
}

function btnDesencriptar(){
    let texto = inputTexto.value;
    let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    mensaje.innerHTML = textoDesencriptado;
}

function btnCopiar(){
    let texto = mensaje.innerHTML;
    navigator.clipboard.writeText(texto);
}