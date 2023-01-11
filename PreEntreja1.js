// Mi simulador está relacionado inicialmente con mi proyecto de Desarrollo Web: una óptica que brinda servicios online
// En este caso ofrezco opciones relacionadas al carrito

// defino lo que quiero que se vea en el alert inicial
let opcion = Number(prompt(" ÓPTICA ONLINE - Su carrito 🛒 \n Ingrese el número de la opción que le interese: \n 1. Ver carrito \n 2. Continuar con el pago \n 3. Salir"));

// agrego dos ejemplos de productos con sus precios correspondientes para hacer correr la función y defino una variable de valor total
const producto1 = 13000;
const producto2 = 8000;
let total = 0;

// declaro función de suma de productos para ver el total de la compra
function ver_carrito() {
    total = producto1 + producto2;
    return total;
}

// declaro funcion para realizar control de flujo con IF
function mostrar_menu(){
    if (opcion == 1) {
        alert("Seleccionaste los productos: \n producto1 \n producto2 \n \n El total a pagar es 💰: $" + ver_carrito());
    }
    
    else if (opcion == 2) {
        alert("Usted está siendo redirigido a la página de pagos, aguarde ⌚");
    }
    
    else if (opcion == 3) {
        alert("¡Gracias por su visita! 🤗👓")
    }
    
    else (alert("Opción inválida 😬, intente de nuevo"));
}

// llamo a la funcion mostrar_menu para evaluar la opcion ingresada
mostrar_menu()
