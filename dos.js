/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	let nombreArticulo;
	let categoria;
	let precio;
	let precioMayor;
	let nomArtMayor;
	let pregunta;
	let i = 0;

	do{
		nombreArticulo = prompt("Ingrese el nombre del artículo:");
		categoria = prompt ("Describa a qué categoría pertenece el artículo anterior:");
		precio = parseInt(prompt("Ingrese el precio del producto:"));

		if(precio<0 || precio>1000){
			alert("El precio debe estar estre 0 y 1000");
		}else{
			if(i===0){
				precio = precioMayor;
				i = 1;
			}
			if(precio>precioMayor){
				precioMayor = precio;
				nomArtMayor = nombreArticulo;
			}

			pregunta = prompt("¿Desea seguir ingresando artículos? Responda Sí o No:");
			pregunta = pregunta.toLowerCase();
		}
	}while(respuesta==="si");

	alert("El articulo de mayor precio es "  );

}