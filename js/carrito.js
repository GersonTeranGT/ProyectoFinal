const firebaseConfig = {
    apiKey: "AIzaSyACm2yHbdzADhcSYFZnSRvLY3b256SbXBI",
    authDomain: "luxdrive-66a6c.firebaseapp.com",
    projectId: "luxdrive-66a6c",
    storageBucket: "luxdrive-66a6c.firebasestorage.app",
    messagingSenderId: "1088365740332",
    appId: "1:1088365740332:web:efa1a35660d86ae31aec89"
};

//INICIAR FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const agregarProducto = async (nombre, precio) => {
    try {
        await db.collection("carrito").add({ nombre, precio });
        await cargarCarrito();
    } catch (error) {
        console.error("Error al agregar el producto", error);
    }
};

// Funcion para cargar en el carrito
const cargarCarrito = async () => {
    const lista = document.querySelector('#carrito');
    lista.innerHTML = "";

    let total = 0;
    const productos = await db.collection("carrito").get();

    productos.forEach(doc => {
        const item = doc.data();
        total += item.precio;

        const li = document.createElement("li");
        li.textContent = `${item.nombre} - ${item.precio.toFixed(2)}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener('click', async () => {
            try {
                await db.collection("carrito").doc(doc.id).delete();
                await cargarCarrito();

                if (item.nombre === 'Lamborghini, Urus') {
                    btnLamborghini.disabled = false;
                    btnLamborghini.textContent = "Agregar";

                } else if (item.nombre == 'NISSAN, GTR-R35') {
                    btnNissan.disabled = false;
                    btnNissan.textContent = "Agregar";

                } else if (item.nombre === 'FORD Shelby, GT500') {
                    btnFord.disabled = false;
                    btnFord.textContent = "Agregar"

                } else if (item.nombre === 'Corvette, C7') {
                    btnCorvet.disabled = false;
                    btnCorvet.textContent = "Agregar";

                } else if (item.nombre === 'Ferrari, F8 Tributo') {
                    btnFerrari.disabled = false;
                    btnFerrari.textContent = "Agregar";

                } else if (item.nombre === 'Mercedes-Benz, 300 SL') {
                    btnMercedes.disabled = false;
                    btnMercedes.textContent = "Agregar";

                } else if (item.nombre === 'Jaguar, E-Type') {
                    btnJaguar.disabled = false;
                    btnJaguar.textContent = "Agregar";

                } else if (item.nombre === 'McLaren, F1 LM') {
                    btnMclaren.disabled = false;
                    btnMclaren.textContent = "Agregar";

                } else if (item.nombre === 'BMW, M4 Coupe') {
                    btnBmw.disabled = false;
                    btnBmw.textContent = "Agregar";

                } else if (item.nombre === 'McLaren, Artura Spider') {
                    btnMcartura.disabled = false;
                    btnMcartura.textContent = "Agregar";

                } else if (item.nombre === 'Aston Martin, DBS Superleggera') {
                    btnAston.disabled = false;
                    btnAston.textContent = "Agregar";

                } else if (item.nombre === 'NISSAN, Skyline GTR-R34') {
                    btnNisan.disabled = false;
                    btnNisan.textContent = "Agregar";
                }
            } catch (error) {
                console.error("No se puede eliminar", error);
            }
        });


        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });

    const totalCompra = document.querySelector('#totalCompra');
    totalCompra.textContent = `Total: $${total.toFixed(2)}`;
};

// Botones de tarjetas
const btnLamborghini = document.querySelector('#botonLamborghini');
btnLamborghini.addEventListener('click', async () => {
    await agregarProducto('Lamborghini, Urus', 570000);
    btnLamborghini.disabled = true;
    btnLamborghini.textContent = "Agregado";
});

const btnNissan = document.querySelector('#botonNissan');
btnNissan.addEventListener('click', async () => {
    await agregarProducto('NISSAN, GTR-R35', 121000);
    btnNissan.disabled = true;
    btnNissan.textContent = "Agregado";
});
const btnFord = document.querySelector('#botonFord');
btnFord.addEventListener('click', async () => {
    await agregarProducto('FORD Shelby, GT500', 100000);
    btnFord.disabled = true;
    btnFord.textContent = "Agregado";
});

const btnCorvet = document.querySelector('#botonCorvet');
btnCorvet.addEventListener('click', async () => {
    await agregarProducto('Corvette, C7', 89000);
    btnCorvet.disabled = true;
    btnCorvet.textContent = "Agregado";
});

const btnFerrari = document.querySelector('#botonFerrari');
btnFerrari.addEventListener('click', async () => {
    await agregarProducto('Ferrari, F8 Tributo', 108000);
    btnFerrari.disabled = true;
    btnFerrari.textContent = "Agreado";
});

const btnMercedes = document.querySelector('#botonMercedes');
btnMercedes.addEventListener('click', async () => {
    await agregarProducto('Mercedes-Benz, 300 SL', 900000);
    btnMercedes.disabled = true;
    btnMercedes.textContent = "Agregado";
});

const btnJaguar = document.querySelector('#botonJaguar');
btnJaguar.addEventListener('click', async () => {
    await agregarProducto('Jaguar, E-Type', 870000);
    btnJaguar.disabled = true;
    btnJaguar.textContent = "Agregado";
});

const btnMclaren = document.querySelector('#botonMclaren');
btnMclaren.addEventListener('click', async () => {
    await agregarProducto('McLaren, F1 LM', 900000);
    btnMclaren.disabled = true;
    btnMclaren.textContent = "Agregado";
});

const btnBmw = document.querySelector('#botonBmw');
btnBmw.addEventListener('click', async () => {
    await agregarProducto('BMW, M4 Coupe', 196000);
    btnBmw.disabled = true;
    btnBmw.textContent = "Agregado";
});

const btnMcartura = document.querySelector('#botonMcartura');
btnMcartura.addEventListener('click', async () => {
    await agregarProducto('McLaren, Artura Spider', 273800);
    btnMcartura.disabled = true;
    btnMcartura.textContent = "Agregado";
});

const btnAston = document.querySelector('#botonAston');
btnAston.addEventListener('click', async () => {
    await agregarProducto('Aston Martin, DBS Superleggera', 320760);
    btnAston.disabled = true;
    btnAston.textContent = "Agregado";
});

const btnNisan = document.querySelector('#botonNisan');
btnNisan.addEventListener('click', async () => {
    await agregarProducto('NISSAN, Skyline GTR-R34', 121000);
    btnNisan.disabled = true;
    btnNisan.textContent = "Agregado";
});

// Al cargar la página
window.onload = () => {
    cargarCarrito();
};

//BOTON PARA PAGAR
const botonPagar = document.querySelector('#botonPagar');

botonPagar.addEventListener('click', async () => {
    const productos = await db.collection("carrito").get();

    const totalProductos = productos.size; // Para que veamos el numero total de productos

    if (totalProductos === 0) {
        alert("El carrito está vacío. ¡Vuelva pronto!");
        window.location.href = "/pages/productos.html";
    } else {
        try {
            const totalCompra = document.querySelector('#totalCompra');
            if (totalCompra) {
                totalCompra.textContent = "";
            }

            alert(`Ha comprado ${totalProductos} auto(s). ¡Gracias por su compra!`);
            window.location.href = "/pages/productos.html";
        } catch (error) {
            console.error("Error al limpiar la visual del carrito", error);
            alert("Hubo un problema al finalizar la compra.");
        }
    }

});

