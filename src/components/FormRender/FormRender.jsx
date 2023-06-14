import React, { useState } from "react";
import onInputChange from "./onInputChange";

const FormRender = ({ formData }) => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    onInputChange(e, formState, setFormState);
  };
  const renderInputField = (field) => {
    const { type, label, placeholder, options } = field;

    switch (type) {
      case "text":
      case "email":
      case "tel":
      case "password":
        return (
          <input
            type={type}
            name={label}
            id={label}
            className="form-control"
            placeholder={placeholder}
            value={formState[label] || ""}
            onChange={handleChange}
          />
        );
      case "textarea":
        return (
          <textarea
            name={label}
            id={label}
            className="form-control"
            placeholder={placeholder}
            value={formState[label] || ""}
            onChange={handleChange}
          />
        );
      case "select":
        return (
          <select
            name={label}
            id={label}
            className="form-select"
            value={formState[label] || ""}
            onChange={handleChange}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "number":
        return (
          <input
            type="number"
            name={label}
            id={label}
            className="form-control"
            placeholder={placeholder}
            value={formState[label] || ""}
            onChange={handleChange}
          />
        );
      case "multiselect":
        return (
          <select
            name={label}
            id={label}
            className="form-select"
            multiple
            value={formState[label] || []}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "multiselect1":
        return (
          <select
            class="selectpicker"
            multiple
            aria-label="Default select example"
            data-live-search="true"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        );
      case "date":
        return (
          <input
            type="date"
            name={label}
            id={label}
            className="form-control"
            placeholder={placeholder}
            value={formState[label] || ""}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };
  const getRows = () => {
    const rows = {};
    formData.forEach((field) => {
      const { row } = field;
      if (!rows[row]) {
        rows[row] = [];
      }
      rows[row].push(field);
    });
    return Object.values(rows);
  };

  return (
    <form>
      {getRows().map((row, index) => (
        <div className="row mb-3" key={index}>
          {row.map((field) => (
            <div className="col" key={field.label}>
              <label htmlFor={field.label} className="form-label">
                {field.label}
              </label>
              {renderInputField(field)}
            </div>
          ))}
        </div>
      ))}
    </form>
  );
};

export default FormRender;
