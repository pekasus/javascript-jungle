function preparationTime(layers, timePerLayer) {
  let t = timePerLayer ?? 2
  return layers.length * t;
}


console.log(preparationTime(['taco', 'salad']));
