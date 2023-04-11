import pizze from "./db.js"
import { checkVeg } from "./functions.js";
console.log(pizze)

/************************************************VARIABILI*******************************************************/
const ul = document.querySelector('ul');
console.log(ul)

const submit = document.querySelector('button')
console.log(submit)

//destrutturiamo le pizze
const pizzeRemap = pizze.map(pizza => {
  const {name, image, price, ingredients, description, votes} = pizza;
  const isVeg = checkVeg(ingredients);

  return {name, image, price, ingredients, description, votes, isVeg}
})

console.log(pizzeRemap);
// //mettiamo le pizze in ordine crescente
// pizzeRemap.sort((a,b) => a.price - b.price )

// //stampo le pizze in pagina
// pizzeRemap.forEach(pizza => {
//   const li = document.createElement('li');
//   li.innerHTML = `${pizza.name}: €${ pizza.price.toFixed(2)} `
//   ul.append(li)
//   console.log(li)
// });
reorderPizza()

/***************************************************SUBMIT******************************************************/
submit.addEventListener( 'click', function(){
  const inputName = document.querySelector('[name= "name"]')

  const inputPrice = document.querySelector('[name="price"]');
  

  const selectIngredients = document.querySelector('[name="ingredients"]')

  
  const selectedIngredients = [];
  for(let ingredient of selectIngredients.options){
    console.log(ingredient.selected)
    if (ingredient.selected){
      selectedIngredients.push(ingredient.value)
    }
  }
  
  
  console.log(inputName.value, inputPrice.value, selectedIngredients.options)

  //creiamo un oggetto al quale assegnamo il valore delle variabili come proprietà
  const newPizza ={
    name:inputName.value,
    price:inputPrice.value,
    ingredients:selectedIngredients,
  };
  console.warn("newPizza", newPizza)

  pizzeRemap.push(newPizza)
  reorderPizza()
});


function reorderPizza(){
 
  //mettiamo le pizze in ordine crescente
  pizzeRemap.sort((a,b) => a.price - b.price )

  ul.innerHTML="";
  //Ristampo le pizze in pagina
  pizzeRemap.forEach(pizza => {
    const li = document.createElement('li');
    li.innerHTML = `${pizza.name}: €${ pizza.price} `
    ul.append(li)
    console.log(li)
});

  console.log(pizzeRemap)

}