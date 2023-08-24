import { useState, useEffect } from "react";
import { credentials } from "./credentials.js";
/**
 *
 * Gets restaurant data from googlesheets
 * Generates a random restaurant
 *
 */

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;

/**
 *  get data
 * */
// async function fetchRestaurantData(url) {
//   const data = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   return data;
// }

// export { fetchRestaurantData };

export function useRestaurantData() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(function () {
    async function fetchRestaurants() {
      try {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error("Something went wrong with fetching restaurants");

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Restaurant data not found");
        }
        setRestaurants(data.values);
      } catch (err) {}
    }
    fetchRestaurants();
  }, []);
  return { restaurants };
}
