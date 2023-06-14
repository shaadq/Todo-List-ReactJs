export const onInputChange = (e, formState, setFormState) => {
  const { name, value, options } = e.target;
  let updatedValue = value;

  switch (e.target.type) {
    case "select-multiple":
      updatedValue = [...options]
        .filter((option) => option.selected)
        .map((option) => option.value);
      break;
    case "checkbox":
      updatedValue = e.target.checked;
      console.log("object");
      break;
    default:
      break;
  }

  setFormState({ ...formState, [name]: updatedValue });
};

export default onInputChange;
