function retirarDinero(saldo, retirar, tieneTarjetaCredito) {
  if (saldo >= retirar) {
    console.log(`Retiro exitoso. Saldo restante: ${saldo - retirar}`);
  } else if (tieneTarjetaCredito) {
    console.log("Saldo insuficiente, pagando con tarjeta de crédito");
  } else {
    console.log("Saldo insuficiente");
  }
}

retirarDinero(500, 200, false);
retirarDinero(100, 200, true);
retirarDinero(100, 200, false);