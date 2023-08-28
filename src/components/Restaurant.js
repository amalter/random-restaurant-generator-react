function isObjectEmpty(obj) {
  return (
    obj === null || typeof obj !== "object" || Object.keys(obj).length === 0
  );
}

export default function Restaurant({ restaurant }) {
  return (
    <section
      className="random-restaurant-section"
      id="random-restaurant-generator"
    >
      <div id="random-restaurant">
        {isObjectEmpty(restaurant) && restaurant === "try again" ? (
          <p>Your selection did not return any results. Please try again.</p>
        ) : isObjectEmpty(restaurant) ? (
          <h2 id="random-restaurant_name">
            Select Neighborhood and Cuisine To Generate a Restaurant
          </h2>
        ) : (
          <>
            <h2>{restaurant.name}</h2>
            <ul className="random-restaurant_details">
              <li>
                🍴 <a href="{restaurant.website}">Menu</a> |{" "}
                {restaurant.cuisine} Cuisine
              </li>
              <li>
                📍 Neighborhood:{" "}
                <a href="{restaurant.gmaps}">{restaurant.neighborhood}</a>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
