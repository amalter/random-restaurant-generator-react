import Button from "./Button";

export default function FilterSelect() {
  return (
    <section className="filter-form">
      <form action="" method="get" id="restaurant-filter_form">
        <div className="filters">
          <fieldset className="filters_fieldset neighborhoods">
            <legend>Neighborhood:</legend>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="all"
                name="All"
                checked
              />
              <label for="All">Select All</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="ballard"
                name="Ballard"
                checked
              />
              <label for="Ballard">Ballard</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="fremont"
                name="Fremont"
                checked
              />
              <label for="Fremont">Fremont</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="greenwood"
                name="Greenwood"
                checked
              />
              <label for="Greenwood">Greenwood</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="maple-leaf"
                name="Maple Leaf"
                checked
              />
              <label for="Maple Leaf">Maple Leaf</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="roosevelt"
                name="Roosevelt"
                checked
              />
              <label for="Roosevelt">Roosevelt</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="wallingford"
                name="Wallingford"
                checked
              />
              <label for="Wallingford">Wallingford</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="neighborhood"
                type="checkbox"
                id="u-district"
                name="U-District"
                checked
              />
              <label for="U-District">U-District</label>
            </div>
          </fieldset>
          {/* neighborhoods*/}
          <fieldset className="filters_fieldset cuisines">
            <legend>Cuisine:</legend>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="all"
                name="All"
                checked
              />
              <label for="All">Select All</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="american-comfort"
                name="American Comfort"
                checked
              />
              <label for="American Comfort">American Comfort</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="chinese"
                name="Chinese"
                checked
              />
              <label for="Chinese">Chinese</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="indian"
                name="Indian"
                checked
              />
              <label for="Indian">Indian</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="japanese"
                name="Japanese"
                checked
              />
              <label for="Japanese">Japanese</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="mexican"
                name="Mexican"
                checked
              />
              <label for="Mexican">Mexican</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="pizza"
                name="Pizza"
                checked
              />
              <label for="Pizza">Pizza</label>
            </div>
            <div className="filters_fieldset__field">
              <input
                className="cuisine"
                type="checkbox"
                id="thai"
                name="Thai"
                checked
              />
              <label for="Thai">Thai</label>
            </div>
          </fieldset>
          {/* cuisines */}
        </div>

        <div className="message-alert"></div>
        <Button />
      </form>
    </section>
  );
}
