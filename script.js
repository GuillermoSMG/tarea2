function compraDeProductos() {
  let descuento = 4;
  let impuesto = 5;
  let precioFinal;
  let numeroDeProducto = parseInt(
    prompt(
      "Elija su producto por numero: 1-Mouse ($10000),  2-Monitor ($25000),  3-MousePad ($6000),  4-Teclado ($12500).\nSi desea finalizar digite 0."
    )
  );
  let metodoPago;
  while (numeroDeProducto !== 0) {
    metodoPago = parseInt(
      prompt(
        "Elija su método de pago de preferencia:\n1 - Tarjeta de débito: 25% descuento, sin impuestos adicionales.\n2 - En efectivo: 25% descuento e impuestos del 20% trás realizado el descuento."
      )
    );
    if (metodoPago === 1) {
      if (numeroDeProducto == 1) {
        precioFinal = 10000 - 10000 / descuento;
        alert("Tu precio final es:  " + "$" + precioFinal + "\nDescuento 25%.");
      } else if (numeroDeProducto == 2) {
        precioFinal = 25000 - 25000 / descuento;
        alert("Tu precio final es:  " + "$" + precioFinal + "\nDescuento 25%.");
      } else if (numeroDeProducto == 3) {
        precioFinal = 6000 - 6000 / descuento;
        alert("Tu precio final es:  " + "$" + precioFinal + "\nDescuento 25%.");
      } else if (numeroDeProducto == 4) {
        precioFinal = 12500 - 12500 / descuento;
        alert("Tu precio final es:  " + "$" + precioFinal + "\nDescuento 25%.");
      } else {
        alert("Producto Inexistente");
      }
    } else if (metodoPago === 2) {
      if (numeroDeProducto == 1) {
        precioFinal = 10000 - 10000 / descuento;
        precioFinal = precioFinal + precioFinal / impuesto;
        alert(
          "Tu precio final es:  " +
            "$" +
            precioFinal +
            "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
        );
      } else if (numeroDeProducto == 2) {
        precioFinal = 25000 - 25000 / descuento;
        precioFinal = precioFinal + precioFinal / impuesto;
        alert(
          "Tu precio final es:  " +
            "$" +
            precioFinal +
            "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
        );
      } else if (numeroDeProducto == 3) {
        precioFinal = 6000 - 6000 / descuento;
        precioFinal = precioFinal + precioFinal / impuesto;
        alert(
          "Tu precio final es:  " +
            "$" +
            precioFinal +
            "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
        );
      } else if (numeroDeProducto == 4) {
        precioFinal = 12500 - 12500 / descuento;
        precioFinal = precioFinal + precioFinal / impuesto;
        alert(
          "Tu precio final es:  " +
            "$" +
            precioFinal +
            "\nDescuento 25%, impuestos del 20% tras efectuado el descuento."
        );
      } else {
        alert("Producto Inexistente");
      }
    } else {
      alert("Método de pago inválido.");
    }

    numeroDeProducto = parseInt(
      prompt(
        "Elija su producto por numero: 1-Mouse ($10000),  2-Monitor ($25000),  3-MousePad ($6000),  4-Teclado ($12500).\nSi desea finalizar digite 0."
      )
    );
  }
}
compraDeProductos();
