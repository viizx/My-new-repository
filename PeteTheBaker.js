let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

function cakes(recipe, available) {
  let sortedAvailable = [];
  let exists = true;
  Object.keys(recipe).forEach((element) => {
    if (!(element in available)) exists = false;
    sortedAvailable.push(Math.floor(available[element] / recipe[element]));
  });
  if (!exists) return 0;
  return Math.min(...sortedAvailable);
}

cakes(recipe, available);
