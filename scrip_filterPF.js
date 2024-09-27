const productos = [
    { nombre: "Laptop", categoria: "Electronica", precio: 800 },
    { nombre: "Teléfono", categoria: "Electronica", precio: 500 },
    { nombre: "Silla", categoria: "Muebles", precio: 120 },
    { nombre: "Escritorio", categoria: "Muebles", precio: 250 },
    { nombre: "Camiseta", categoria: "Ropa", precio: 20 },
    { nombre: "Pantalón", categoria: "Ropa", precio: 30 }
];

const filtrarPorCategoriaYPrecio = (categoria, precioMin, precioMax) => {
    return productos.filter(producto => {
        const cumpleCategoria = categoria ? producto.categoria.toLowerCase() === categoria.toLowerCase() : true;
        const cumplePrecioMin = precioMin ? producto.precio >= precioMin : true;
        const cumplePrecioMax = precioMax ? producto.precio <= precioMax : true;
        return cumpleCategoria && cumplePrecioMin && cumplePrecioMax;
    });
};

const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; 

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<li>No se encontraron productos que coincidan con los filtros.</li>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(item);
    });
};

document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();
    const categoria = document.getElementById('categoria').value;
    const precioMin = parseFloat(document.getElementById('precioMin').value);
    const precioMax = parseFloat(document.getElementById('precioMax').value);

    const productosFiltrados = filtrarPorCategoriaYPrecio(categoria, precioMin, precioMax);
    mostrarProductos(productosFiltrados);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('formulario').reset();
    document.getElementById('lista-productos').innerHTML = '';
});
