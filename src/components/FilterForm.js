import Button from "./Button";
import { inputs } from "../apis/inputs";

import Fieldset from "./Fieldset";

export default function FilterSelect() {
  return (
    <section className="filter-form">
      <form action="" method="get" id="restaurant-filter_form">
        <div className="filters">
          <Fieldset
            category={"neighborhood"}
            fieldsetClass={"filters_fieldset"}
            legend={"Neighborhood"}
            inputs={inputs.neighborhoods}
          />
          <Fieldset
            category={"cuisine"}
            fieldsetClass={"filters_fieldset"}
            legend={"Cuisine"}
            inputs={inputs.cuisines}
          />
        </div>

        <div className="message-alert"></div>
        <Button />
      </form>
    </section>
  );
}
