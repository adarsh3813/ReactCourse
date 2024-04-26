export function filterData(name, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(name)
  );
}

export function filterRating(restaurants) {
  return restaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
}
