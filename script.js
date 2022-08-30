function compraDeProductos() {
  for (let i = 0; (i = 5); i++) {
    alert(
      "1-Mouse ($10000),  2-Monitor ($25000),  3-MousePad ($6000),  4-Teclado ($12500)"
    );
    let descuento = 4;
    let impuesto = 5;
    let precioFinal;
    let numeroDeProducto = parseInt(prompt("Elija su producto por numero"));
    if (numeroDeProducto == 1) {
      precioFinal = 10000 - 10000 / descuento + 10000 / impuesto;
      alert("Tu precio final es:  " + "$" + precioFinal);
    } else if (numeroDeProducto == 2) {
      precioFinal = 25000 - 25000 / descuento + 25000 / impuesto;
      alert("Tu precio final es:  " + "$" + precioFinal);
    } else if (numeroDeProducto == 3) {
      precioFinal = 6000 - 6000 / descuento + 6000 / impuesto;
      alert("Tu precio final es:  " + "$" + precioFinal);
    } else if (numeroDeProducto == 4) {
      precioFinal = 12500 - 12500 / descuento + 12500 / impuesto;
      alert("Tu precio final es:  " + "$" + precioFinal);
    } else {
      alert("Producto Inexistente");
    }
  }
}
compraDeProductos();
