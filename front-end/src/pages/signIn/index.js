import * as React from "react";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";

export default function SignIn() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {{
        setFormData({
          ...formData,
            [e.target.name]: e.target.value
        });
    }}
  const handleSubmit = async (event) => {
    event.preventDefault();

      try {
          const { data } = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/registerActivateScience`,
              {
                  "emailAddress": formData.emailAddress,
                  "accountNumber": formData.accountNumber,
                  "firstName": formData.firstName,
                  "lastName": formData.lastName,
                  "company": formData.company,
                  "businessPhone": formData.businessPhone,
                  "address1": formData.address1,
                  "city": formData.city,
                  "address2": formData.address2,
                  "zipPostal": formData.zipPostal,
                  "country": formData.country,
                  "title": formData.title
              }
          );
          console.log(data);
      } catch (error) {
          console.error(error);
      }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Container
        maxWidth="sm"
        fixed
        sx={{
          position: "fixed",
          zIndex: 99999,
          marginLeft: "-0.98rem",
          top: 0,
          backgroundColor: "white",
        }}
      >
        <img
          src="../../images/activate-science.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
          <Typography sx={{ mt: -2, color: "black", pb: 2 }} variant="body1" align="center">
              Inscrivez-vous dès maintenant <br />  à l'évènement Activate Science<br />Sanofi Marcy l'Etoile
            <br />
        </Typography>
      </Container>
      <Box
        sx={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Civilité"
                name="title"
                autoFocus
                onChange={handleChange}
            />
          <TextField
            margin="normal"
            required
            fullWidth
            id="emailAddress"
            label="Adresse mail"
            name="emailAddress"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="accountNumber"
            label="Numéro de compte Thermofisher"
            type="text"
            id="accountNumber"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Prénom"
            name="firstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="company"
            label="Entreprise"
            name="company"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="businessPhone"
            label="Téléphone de l'entreprise"
            name="businessPhone"
            autoFocus
            type="number"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address1"
            label="Addresse 1"
            name="address1"
            autoFocus
            type="text"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="city"
            label="Ville"
            name="city"
            autoFocus
            type="text"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="address2"
            label="Addresse 2"
            name="address2"
            autoFocus
            type="text"
            onChange={handleChange}
          />
          <TextField
              margin="normal"
              required
              fullWidth
              id="zipPostal"
              label="Code postal"
              name="zipPostal"
              autoFocus
              type="text"
              onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoFocus
            type="text"
            onChange={handleChange}
          />
          {/*<TextField*/}
          {/*  margin="normal"*/}
          {/*  required*/}
          {/*  fullWidth*/}
          {/*  id="marketingCountry"*/}
          {/*  label="Pays de marketing"*/}
          {/*  name="marketingCountry"*/}
          {/*  autoFocus*/}
          {/*  type="text"*/}
          {/*/>*/}
          {/*<TextField*/}
          {/*  margin="normal"*/}
          {/*  required*/}
          {/*  fullWidth*/}
          {/*  id="locale"*/}
          {/*  label="Local"*/}
          {/*  name="locale"*/}
          {/*  autoFocus*/}
          {/*  type="text"*/}
          {/*/>*/}
          {/*<TextField*/}
          {/*  margin="normal"*/}
          {/*  required*/}
          {/*  fullWidth*/}
          {/*  id="language"*/}
          {/*  label="Langage"*/}
          {/*  name="language"*/}
          {/*  autoFocus*/}
          {/*  type="text"*/}
          {/*/>*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
