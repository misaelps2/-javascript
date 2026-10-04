const produto = "teclado usb";
const preco = 25;
const quantidade = 1;
const subtotal = preco * quantidade;
const desconto = subtotal * 0.10;
const totalfinal = subtotal - desconto;


console.log(`Produto: ${produto},\nPreco: ${preco},\nQuantidade: ${quantidade}\nSubtotal: ${subtotal}\nDesconto: ${desconto}\nTotal: ${totalfinal}`);
console.log(`Compra Acima de 100$? ${totalfinal > 100}`) ;