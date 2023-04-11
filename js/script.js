import pizze from "./db.js"
import { checkVeg } from "./functions.js";
console.log(pizze)


const pizzeRemap = pizze.map(pizza => {
  const {name, image, price, ingredients, description, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  

  return {name, image, price, ingredients, description, votes, isVeg}
})

console.log(pizzeRemap);

pizzeRemap.sort((a,b) => a.price - b.price )

//visualizzare pizza top