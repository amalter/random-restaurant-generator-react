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
      setSelectedCheckboxes((prevSelected) => {
        const updatedSelected = {
          ...prevSelected,
          [category]: initialCheckboxes,
        };

        return updatedSelected;
      });
    } else {
      // setSelectedCheckboxes([]);
      setSelectedCheckboxes((prevSelected) => {
        const updatedSelected = { ...prevSelected };
        delete updatedSelected[category]; // Remove the array for the category
        return updatedSelected;
      });
    }
  };

  const handleClick = (e) => {
    const { id, checked, className } = e.target;
    const checkboxValue = e.target.value;

    setIsCheck([...isCheck, id]);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }

    setSelectedCheckboxes((prevSelected) => {
      const updatedSelected = { ...prevSelected };

      if (checked) {
        if (updatedSelected[className]) {
          updatedSelected[className].push(checkboxValue);
        } else {
          updatedSelected[className] = [checkboxValue];
        }
      } else {
        if (updatedSelected[className]) {
          updatedSelected[className] = updatedSelected[className].filter(
            (value) => value !== checkboxValue
          );
        }
      }

      return updatedSelected;
    });
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
