import { useState } from "react";
import Checkbox from "./Checkbox";
export default function Fieldset({ category, fieldsetClass, legend, inputs }) {
  const [selectAll, setSelectAll] = useState(true);
  // const [checked, setChecked] = useState(true);

  function handleSelectAll() {
    setSelectAll((check) => !check);
    //   setChecked(() => (!selectAll ? true : false));
  }

  return (
    <fieldset className={`${fieldsetClass} ${category}s`} key={category}>
      <legend>{legend}:</legend>
      <div className={`${fieldsetClass}__field`}>
        <input
          className={category}
          type="checkbox"
          id="all"
          name="All"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <label for="All">Select All</label>
      </div>
      {inputs.map((input) => (
        <Checkbox
          key={input.id}
          fieldsetClass={fieldsetClass}
          checkboxClass={input.class}
          checkboxName={input.name}
          checkboxId={input.id}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          // checked={checked}
        />
      ))}
    </fieldset>
  );
}
