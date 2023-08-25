import { useEffect, useState } from "react";

export default function Checkbox({
  fieldsetClass,
  checkboxClass,
  checkboxName,
  checkboxId,
}) {
  const [selectAll, setSelectAll] = useState(false);

  const [checked, setChecked] = useState(false);
  // const isChecked = selectAll ? true : !checked;

  function handleCheck(e) {
    setChecked(!checked);
    if (e.target.id === "all") {
      console.log("all");
      setSelectAll(!selectAll);
      setChecked(!checked);
    } else {
      console.log("else");
      setSelectAll(false);
    }
  }
  useEffect(
    function () {
      if (selectAll) {
        setChecked(false);
        setChecked(true);
      }
    },
    [selectAll]
  );

  return (
    <div className={`${fieldsetClass}__field`}>
      <input
        className={checkboxClass}
        type="checkbox"
        id={checkboxId}
        name={checkboxName}
        checked={checked}
        onChange={(e) => handleCheck(e)}
      />
      <label htmlFor={checkboxName}>{checkboxName}</label>
    </div>
  );
}
