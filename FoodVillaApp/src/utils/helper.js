export function filterData(name, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(name)
  );
}
