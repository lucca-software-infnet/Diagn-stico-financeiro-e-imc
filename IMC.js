let peso = Number(prompt("Digite o seu peso"))
let altura = Number(prompt("Digite o seu altura"))
let IMC = peso/(altura**2).toFixed(2)

if (IMC < 18.5) {
  alert(`IMC = ${IMC.toFixed(2)} Magreza `);
  
}else if (IMC > 18.5 && IMC < 24.9){
  alert(`IMC = ${IMC.toFixed(2)} Nomal ` );
  
}else if (IMC > 25.0 && IMC < 29.9){
  alert(`IMC = ${IMC.toFixed(2)} Sobrepeso `);
  
}else if (IMC > 30.0 && IMC < 39.9){
  alert(`IMC = ${IMC.toFixed(2)} Obesidade `);
  
}else if(IMC > 40.0 ){
  alert(`IMC = ${IMC.toFixed(2)} Obesidade grave `);
  
}else{
  alert("Valor não conhecido");
}
   
   
   

  