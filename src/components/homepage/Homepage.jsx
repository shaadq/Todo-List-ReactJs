import React from "react";
import "./homepage.scss";
import FormRender from "../FormRender/FormRender";

const Homepage = () => {
  const formData = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      row: 1,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      row: 1,
    },
    {
      label: "Phone",
      type: "number",
      placeholder: "Enter your phone number",
      row: 2,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your phone number",
      row: 2,
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
      row: 3,
    },
    {
      label: "City",
      type: "text",
      placeholder: "Enter your city",
      row: 3,
    },
    {
      label: "Zip",
      type: "select",
      options: ["Shaad", "Arbaz"],
      placeholder: "Enter your ZIP code",
      row: 4,
    },
    {
      label: "Names",
      type: "multiselect",
      options: ["Shaad", "Arbaz", "Shubham", "Abhishek"],
      placeholder: "Enter your ZIP code",
      row: 4,
    },
  ];

  return (
    <div className="homepage-container p-5">
      <FormRender formData={formData} />
    </div>
  );
};

export default Homepage;
