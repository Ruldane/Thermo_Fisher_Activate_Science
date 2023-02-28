import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import RegisterInput from "../../components/inputs/registerInput";
import * as Yup from "yup";
import RingLoader from "react-spinners/RingLoader";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function AdminForm() {
  // get email from url using react-router
  const { email } = useParams();
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const getUserByEmail = async () => {
    try {
      const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/getUserByEmail`,
          {"email": email},
      );
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserByEmail();
  }, [email]);

  const userInfos = {
    emailAddress: "",
    accountNumber: "",
    firstName: "",
    lastName: "",
    company: "",
    businessPhone: "",
    address1: "",
    address2: "",
    zipPostal: "",
    city: "",
    country: "",
    marketingCountry: "",
    locale: "",
    language: "",
  };

  const [user, setUser] = useState(userInfos);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    emailAddress,
    accountNumber,
    firstName,
    lastName,
    company,
    businessPhone,
    address1,
    address2,
    zipPostal,
    city,
    country,
    marketingCountry,
    locale,
    language,
  } = user;

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const RegisterValidation = Yup.object({
    first_name: Yup.string()
      .required("What's your First name?")
      .min(2, "First name must be between 2 and 16 characters")
      .max(16, "First name must be between 2 and 16 characters")
      .matches(
        /^[aA-zZ]+$/,
        "First name can't contain special characters and numbers"
      ),

    last_name: Yup.string()
      .required("What's your Last name?")
      .min(2, "Last name must be between 2 and 16 characters")
      .max(16, "Last name must be between 2 and 16 characters")
      .matches(
        /^[aA-zZ]+$/,
        "Last name can't contain special characters and numbers"
      ),

    emailAddress: Yup.string()
      .required(
        "You will need this to register. Please enter your email address"
      )
      .email("Invalid email address"),

    // password: Yup.string()
    //   .required(
    //     "Enter a combunation of at least six numbers, letters and punctuation marks (like ! and &)."
    //   )
    //   .min(6, "Password must be at least 6 characters")
    //   .max(36, "Password can't be longer than 36 characters"),
  });

  const registerSubmit = async () => {
    console.log(user);
    let formdata = new FormData();
    formdata.append("emailAddress", emailAddress);
    formdata.append("accountNumber", accountNumber);
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("company", company);
    formdata.append("businessPhone", businessPhone);
    formdata.append("address1", address1);
    formdata.append("city", city);
    formdata.append("address2", address2);
    formdata.append("zipPostal", zipPostal);
    formdata.append("country", country);
    formdata.append("marketingCountry", marketingCountry);
    formdata.append("locale", locale);
    formdata.append("language", language);

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://ebiz.thermofisher.com/EU/NLSU/2.0/index.php?action=submitInscriptionActivateScience",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mb: 5 }}>
        <img
          src="../../images/activate-science.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            marginBottom: "-2rem",
          }}
        />
        <Typography
          sx={{ mt: 5, color: "black" }}
          variant="body1"
          align="center"
        >
          Sanofi Marcy l'Etoile Activate Science.
        </Typography>

        <Formik
          enableReinitialize
          initialValues={{
            emailAddress,
            accountNumber,
            firstName,
            lastName,
            company,
            businessPhone,
            address1,
            address2,
            zipPostal,
            city,
            country,
            marketingCountry,
            locale,
            language,
          }}
          //validationSchema={RegisterValidation}
          onSubmit={() => {
            registerSubmit();
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup">
                  Validez la présence de {firstName} {lastName}
                </button>
              </div>
              <RingLoader color="#18f6f2" loading={loading} size={150} />
              {error && <div className="error_text">{error}</div>}
              {error && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
