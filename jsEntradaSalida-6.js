/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    box1 = parseInt(document.getElementById("numeroUno").value);
    box2 = parseInt(document.getElementById("numeroDos").value);

    alert("La suma es " + (box1 + box2));
}

