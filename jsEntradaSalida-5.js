/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    box1 = document.getElementById("elNombre").value;
    box2 = document.getElementById("laEdad").value;

    alert("Usted se llama " + box1 + " y tiene " + box2 + " años.")
}

