import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import RegisterInput from "../../components/inputs/registerInput";
import * as Yup from "yup";
import RingLoader from "react-spinners/RingLoader";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputLabel, useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export default function ChoiceForm() {
  // get email and supplier from url using react-router
  const { email } = useParams();
  const { supplier } = useParams();

  const userInfos = {
    emailAddress: "",
      Account_Number: "",
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
    comments: "",
    quote: "",
  };

  const [user, setUser] = useState(userInfos);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = React.useState("");

  const matchesSM = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const handleChange = (event) => {
    setRequestType(event.target.value);
  };

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
    };

    useEffect(() => {
        getUserByEmail();
    }, [email]);

    useEffect(() => {
        if(user?.Account_Number) {
            setUser({...user, comments: ""});
        }
    }, []);

  console.log(user, "user");

  const {
    emailAddress,
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
    comments,
      Account_Number
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
          try {
              const { data } = await axios.post(
                  `${process.env.REACT_APP_BACKEND_URL}/submitActivateScience`,
                  {"emailAddress": emailAddress, "accountNumber": Account_Number, "firstName": firstName, "lastName": lastName, "company": company, "businessPhone": businessPhone, "address1": address1,
                  "city": city, "address2": address2, "zipPostal": zipPostal, "country": country, "marketingCountry": marketingCountry, "locale": locale, "language": language,
                      "comments": comments, "supplierEvent": supplier, "requestType": requestType},
              );
          console.log(data);
          } catch (error) {
              console.error(error);
          }
  };

  return (
    <Container maxWidth="md" sx={{ mb: 5, mt: 1 }}>
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
      <Typography sx={{ mt: 5, color: "black" }} variant="body1" align="center">
        Fournisseur: {supplier}
      </Typography>
      <Typography sx={{ mt: 1, color: "black" }} variant="body1" align="center">
        Client: {firstName} {lastName}
      </Typography>
      <Formik
        enableReinitialize
        initialValues={{
          emailAddress,
            Account_Number,
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
            <Box sx={{ width: "90%", mt: 2, mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Request Type</InputLabel>
                <Select
                  value={requestType}
                  label="Request Type"
                  onChange={handleChange}
                >
                  <MenuItem value="Quote">Devis</MenuItem>
                  <MenuItem value="Pricing">Prix</MenuItem>
                  <MenuItem value="Technical Information">
                    Information technique
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <textarea
              placeholder={`Commentaire(s)`}
              maxLength="250"
              name="comments"
              onChange={handleRegisterChange}
              style={{
                width: "90%",
                height: "150px",
                padding: "12px 20px",
                boxSizing: "border-box",
                border: "2px solid #CCC",
                borderRadius: "4px",
                backgroundColor: "#f8f8f8",
                fontSize: "16px",
                resize: "none",
              }}
            ></textarea>

            <div className="reg_btn_wrapper">
              <button className="blue_btn open_signup">
                Validez votre demande
              </button>
            </div>
            <RingLoader color="#18f6f2" loading={loading} size={150} />
            {error && <div className="error_text">{error}</div>}
            {error && <div className="success_text">{success}</div>}
          </Form>
        )}
      </Formik>
    </Container>
  );
}
