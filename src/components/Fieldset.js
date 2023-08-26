import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Fieldset({
  category,
  fieldsetClass,
  legend,
  inputs,
  selectedCheckboxes,
  setSelectedCheckboxes,
}) {
  const initialCheckboxes = inputs.map((input) => input.name);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(inputs.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
    if (e.target.checked) {
      setSelectedCheckboxes(initialCheckboxes);
    } else {
      setSelectedCheckboxes([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    const checkboxValue = e.target.value;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
    if (checked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((value) => value !== checkboxValue)
      );
    }
  };
  return (
    <fieldset className={`${fieldsetClass} ${category}s`} key={category}>
      <legend>{legend}:</legend>

      <Checkbox
        key={category}
        fieldsetClass={fieldsetClass}
        checkboxClass={category}
        checkboxName="Select All"
        checkboxId="all"
        onChange={handleSelectAll}
        isChecked={isCheckAll}
      />

      {inputs.map((input) => (
        <Checkbox
          key={input.id}
          fieldsetClass={fieldsetClass}
          checkboxClass={input.class}
          checkboxName={input.name}
          checkboxId={input.id}
          onChange={handleClick}
          isChecked={isCheck.includes(input.id)}
        />
      ))}
    </fieldset>
  );
}
