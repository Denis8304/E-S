/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	box1 = parseInt(document.getElementById("numeroUno").value);
    box2 = parseInt(document.getElementById("numeroDos").value);

    alert("El resultado es " + (box1 + box2));
}

function restar()
{
	box1 = parseInt(document.getElementById("numeroUno").value);
    box2 = parseInt(document.getElementById("numeroDos").value);

    alert("El resultado es " + (box1 - box2));
}

function multiplicar()
{ 
	box1 = parseInt(document.getElementById("numeroUno").value);
    box2 = parseInt(document.getElementById("numeroDos").value);

    alert("El resultado es " + (box1 * box2));
}

function dividir()
{
	box1 = parseInt(document.getElementById("numeroUno").value);
    box2 = parseInt(document.getElementById("numeroDos").value);

    alert("El resultado es " + (box1 / box2));
}

