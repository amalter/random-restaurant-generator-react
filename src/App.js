import "./App.css";
//import { useRestaurantData } from "./hooks/useRestaurantData";
import FilterForm from "./components/FilterForm";
import Restaurant from "./components/Restaurant";
import { useState } from "react";
import restaurants from "./apis/restaurants.json";

function App() {
  //const { restaurants, isLoading, error } = useRestaurantData();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState({});

  return (
    <div className="App">
      <header className="main_heading">
        <h1 className="main_heading-title">Random Restaurant Generator</h1>
        <p className="main_heading-description">
          Randomly generates vegan-friendly restaurants in the Seattle area.
        </p>
      </header>
      <section className="main_content">
        <FilterForm
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
          restaurants={restaurants}
          randomRestaurant={randomRestaurant}
          setRandomRestaurant={setRandomRestaurant}
        />
        <Restaurant restaurant={randomRestaurant} />
      </section>
      <footer className="main_footer">
        <div id="copyright">&copy; Amber Alter</div>
        <div className="source">
          <a href="https://github.com/amalter/random-restaurant-generator-vanilla">
            View source code on GitHub
            <img
              className="git-hub-logo"
              src="https://www.amberalter.com/wp-content/themes/sage-portfolio/dist/images/github_09c159a1.png"
              alt="githublogo"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
