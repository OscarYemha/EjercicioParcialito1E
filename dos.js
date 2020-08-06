function mostrar(){

	let nombreArticulo;
	let categoria;
	let precio;
	let precioMayor;
	let nomArtMayor;
	let precioLacteos;
	let nomLacteoMayor;
	let cantidadBebidas = 0;
	let iArt = 0;
	let iLac = 0;
	let pregunta;

	do{
		nombreArticulo = prompt("Ingrese el nombre del artículo:");

		categoria = prompt("Describa a qué categoría pertenece el artículo ingresado(Almacen, lácteos, limpieza o bebidas):");
		categoria = categoria.toLowerCase();
		while(categoria!=="almacen" && categoria!=="lacteos" && categoria!=="limpieza" && categoria!=="bebidas"){
			categoria = prompt("Describa a qué categoría pertenece el artículo ingresado(Almacen, lácteos, limpieza o bebidas):");
			categoria = categoria.toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio del producto(debe estar entre 0 y 1000):"));
		while(precio<0 || precio>1000){
			precio = parseInt(prompt("Ingrese el precio del producto(debe estar entre 0 y 1000):"));
		}

		if(iArt===0 || precio>precioMayor){
				precioMayor = precio;
				nomArtMayor = nombreArticulo;
				iArt = 1;
		}

		if(categoria==="lacteos"){
			if(iLac===0 || precio>precioLacteos){
				precioLacteos = precio;
				nomLacteoMayor = nombreArticulo;
				iLac = 1;
			}
		}

		if(categoria==="bebidas"){
			cantidadBebidas ++;
		}

		pregunta = prompt("¿Desea seguir ingresando artículos? Responda Sí o No:");
		pregunta = pregunta.toLowerCase();
	
	}while(pregunta==="si");

	alert("El articulo de mayor precio es: "  + nomArtMayor);
	alert("La cantidad de bebidas ingresadas es " + cantidadBebidas);
	alert("El lácteo de mayor precio es: " + nomLacteoMayor);
}