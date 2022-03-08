import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const inputs = [
    {
      id: 1, //added newly
      name: "FirstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2, //added newly
      name: "LastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3, //added newly
      name: "MobileNumber",
      type: "text",
      placeholder: "MobileNumber",
      errorMessage:
        "MobileNumber should be 10 characters and shouldn't include any special character!",
      label: "Mobile Number",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Api call
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const upload = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
  };

  const getFile = (e) => {
    console.log("pring");
    console.log(e.target.files[0]);
    console.log(selectedFile);

    console.log(setSelectedFile(e.target.files[0]));
    console.log(selectedFile);
  };

  return (
    <>
      <div className="app ">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>

        <form onSubmit={upload}>
          <label htmlFor="">Upload your profile pic</label>
          <br></br>
          <input type="file" onChange={getFile} />
          <div>
            {/*
            <input 
              type="submit"
              value="Submit"
            />
          */}
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
