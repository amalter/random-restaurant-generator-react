import { useEffect, useState } from "react";
import Button from "./Button";
import { inputs } from "../apis/inputs";

import Fieldset from "./Fieldset";

export default function FilterSelect() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedCheckboxes);
    // console.log(e.target);
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
