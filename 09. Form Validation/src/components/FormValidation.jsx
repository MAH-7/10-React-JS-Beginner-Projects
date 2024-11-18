import { useState } from "react";
import "../index.css";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formColor, setFormColor] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = (e) => {
    e.preventDefault();

    // Temporary objects to store new values
    const newErrors = { ...formErrors };
    const newColors = { ...formColor };

    // Username validation
    if (formData.username.length >= 8) {
      newErrors.username = "";
      newColors.username = "green";
    } else {
      newErrors.username = "Username must be at least 8 characters";
      newColors.username = "red";
    }

    // Email validation
    if (formData.email.includes("@")) {
      newErrors.email = "";
      newColors.email = "green";
    } else {
      newErrors.email = "Email must contain @";
      newColors.email = "red";
    }

    // Password validation
    if (formData.password.length >= 8) {
      newErrors.password = "";
      newColors.password = "green";
    } else {
      newErrors.password = "Password must be at least 8 characters";
      newColors.password = "red";
    }

    // Confirm password validation
    if (
      formData.password !== "" &&
      formData.password === formData.confirmPassword
    ) {
      newErrors.confirmPassword = "";
      newColors.confirmPassword = "green";
    } else {
      newErrors.confirmPassword = "Passwords do not match";
      newColors.confirmPassword = "red";
    }

    // Update state only once for each
    setFormErrors(newErrors);
    setFormColor(newColors);
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: formColor.username }}
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <p className="error">{formErrors.username}</p>
          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: formColor.email }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <p className="error">{formErrors.email}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: formColor.password }}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <p className="error">{formErrors.password}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: formColor.confirmPassword }}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <p className="error">{formErrors.confirmPassword}</p>

          <button className="submit-btn" onClick={validateForm}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};
export default FormValidation;
