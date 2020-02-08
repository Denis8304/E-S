/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    box1 = parseInt(document.getElementById("sueldo").value);
    resultado = (box1 * 10 / 100) + box1;
    document.getElementById("resultado").value = resultado;
}
