import Button from "./Button";
import { inputs } from "../apis/inputs";

import Fieldset from "./Fieldset";

function getRandomRestaurant(restaurantsObj, filters) {
  if (Object.keys(filters).length === 0) {
    return;
  }

  const restaurantsArray = Object.values(restaurantsObj); // Convert object to array

  // Apply filters to the restaurants
  const filteredRestaurants = restaurantsArray.filter((restaurant) => {
    return (
      (filters.cuisine === undefined ||
        filters.cuisine.includes(restaurant.cuisine)) &&
      (filters.neighborhood === undefined ||
        filters.neighborhood.includes(restaurant.neighborhood))
    );
  });

  if (filteredRestaurants.length === 0) {
    return "try again";
  }

  // Select a random restaurant from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);

  return filteredRestaurants[randomIndex];
}

export default function FilterForm({
  selectedCheckboxes,
  setSelectedCheckboxes,
  restaurants,
  randomRestaurant,
  setRandomRestaurant,
  isLoading,
  error,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setRandomRestaurant(getRandomRestaurant(restaurants, selectedCheckboxes));
  }
  return (
    <section className="filter-form">
      <form
        action=""
        method="get"
        id="restaurant-filter_form"
        onSubmit={handleSubmit}
      >
        <div className="filters">
          <Fieldset
            category={"neighborhood"}
            fieldsetClass={"filters_fieldset"}
            legend={"Neighborhood"}
            inputs={inputs.neighborhoods}
            selectedCheckboxes={selectedCheckboxes}
            setSelectedCheckboxes={setSelectedCheckboxes}
          />
          <Fieldset
            category={"cuisine"}
            fieldsetClass={"filters_fieldset"}
            legend={"Cuisine"}
            inputs={inputs.cuisines}
            selectedCheckboxes={selectedCheckboxes}
            setSelectedCheckboxes={setSelectedCheckboxes}
          />
        </div>

        <div className="message-alert"></div>
        <Button />
      </form>
    </section>
  );
}
