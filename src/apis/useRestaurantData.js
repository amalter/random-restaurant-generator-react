import { useState, useEffect } from "react";
import { credentials } from "./credentials.js";
/**
 *
 * Gets restaurant data from googlesheets
 * Generates a random restaurant
 *
 */

const url = `https://sheets.googleapis.com/v4/spreadsheets/${credentials.spreadsheetId}/values/${credentials.range}?alt=json&key=${credentials.apiKey}`;

export function useRestaurantData() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    const controller = new AbortController();
    async function fetchRestaurants() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok)
          throw new Error("Something went wrong with fetching restaurants");

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Restaurant data not found");
        }
        const restaurantData = data.values.slice(1);
        let values = {};
        restaurantData.map((value, i) => {
          values[i] = {
            name: value[0],
            menuUrl: value[1],
            neighborhood: value[2],
            address: value[3],
            cuisine: value[4],
            keywords: value[5],
            vegan: value[6],
          };
        });
        setRestaurants(values);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchRestaurants();
    return function () {
      controller.abort();
    };
  }, []);
  return { restaurants, isLoading, error };
}
