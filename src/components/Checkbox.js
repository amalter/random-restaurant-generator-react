export default function Checkbox({
  fieldsetClass,
  checkboxClass,
  checkboxName,
  checkboxId,
}) {
  return (
    <div className="{fieldsetClass}__field">
      <input
        className="{checkboxClass}"
        type="checkbox"
        id="{checkboxId}"
        name="{checkboxName}"
        checked
      />
      <label for="{checkboxName}">{checkboxName}</label>
    </div>
  );
}
