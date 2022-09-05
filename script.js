function compraDeProductos() {
  let descuento = 4;
  let impuesto = 5;
  let precioFinal;
  let numeroDeProducto = parseInt(
    prompt(
      "Elija su producto por numero: 1-Mouse ($10000),  2-Monitor ($25000),  3-MousePad ($6000),  4-Teclado ($12500).\nSi desea finalizar digite 0."
    )
  );
  while (numeroDeProducto !== 0) {
    if (numeroDeProducto == 1) {
      precioFinal = 10000 - 10000 / descuento + 10000 / impuesto;
      alert(
        "Tu precio final es:  " +
          "$" +
          precioFinal +
          "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
      );
    } else if (numeroDeProducto == 2) {
      precioFinal = 25000 - 25000 / descuento + 25000 / impuesto;
      alert(
        "Tu precio final es:  " +
          "$" +
          precioFinal +
          "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
      );
    } else if (numeroDeProducto == 3) {
      precioFinal = 6000 - 6000 / descuento + 6000 / impuesto;
      alert(
        "Tu precio final es:  " +
          "$" +
          precioFinal +
          "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
      );
    } else if (numeroDeProducto == 4) {
      precioFinal = 12500 - 12500 / descuento + 12500 / impuesto;
      alert(
        "Tu precio final es:  " +
          "$" +
          precioFinal +
          "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
      );
    } else {
      alert("Producto Inexistente");
    }

    numeroDeProducto = parseInt(
      prompt(
        "Elija su producto por numero: 1-Mouse ($10000),  2-Monitor ($25000),  3-MousePad ($6000),  4-Teclado ($12500).\nSi desea finalizar digite 0."
      )
    );
  }
}
compraDeProductos();
