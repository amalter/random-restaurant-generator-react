import "./App.css";
import { useRestaurantData } from "./apis/useRestaurantData";
import FilterSelect from "./components/FilterSelect";
import Button from "./components/Button";
import Restaurant from "./components/Restaurant";

function App() {
  const { restaurants } = useRestaurantData();
  console.log(restaurants);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main_heading-title">Random Restaurant Generator</h1>
      </header>
      <section className="main_content">
        <FilterSelect />
        <Button />
        <Restaurant />
      </section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
