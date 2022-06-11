var intentos=0;
function compararIntentos(){
    let valor1=document.getElementById("usuario").value;
    let valor2=document.getElementById("clave1").value;
    let valor3=document.getElementById("clave2").value;

    let text = document.getElementById("textpantalla");
    if (valor2==valor3)
    {
        text.innerHTML=("Bienvenido " +  valor1);
        text.style.color="green";
    }
    else if(intentos<3)
    {
        intentos++;
        text.innerHTML=("Las contraseñas no coinciden");
        text.style.color="red";
        if (intentos==3)
        {
        text.innerHTML=("Ha exedido el numero de intentos");
        text.style.color="red";
        }
    }
    return false;
}