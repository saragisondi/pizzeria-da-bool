export{checkVeg}

//facciamo una funzione per capire se la pizza è vegana oppure no
const checkVeg= (ingredients) => {
  const noVegIngredients = ['salame','mozzarella','salsiccia','acciughe','prosciutto', 'grana', 'scamorza', 'gorgonzola'];
  let isVeg = true;
  //faccio un ciclo per vedere ingrediente per ingrediente
  ingredients.forEach(ingredient => {
    if(noVegIngredients.includes(ingredient)) isVeg = false;
    console.log(ingredient)

  });
  return isVeg;
}

//accetta come parametro l'array delle pizze , calcola la media dei voti di ogni pizza e restituisce la pizza con la media più alta
function getPizzaTop(){
 
}

