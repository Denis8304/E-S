/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	box1 = parseInt(document.getElementById("importe").value);
    resultado = box1 - (box1 * 25 / 100);
    document.getElementById("resultado").value = resultado;
}
