import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

      try {
          const { data } = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/registerActivateScience`,
              { "emailAddress": formData.get("emailAddress"), "accountNumber":  formData.get("accountNumber"),
              "firstName": formData.get("firstName"), "lastName": formData.get("lastName"), "company": formData.get("company"),
              "businessPhone": formData.get("businessPhone"), "address1": formData.get("address1"),
              "city": formData.get("city"), "address2": formData.get("address2"), "zipPostal": formData.get("zipPostal"),
              "country": formData.get("country"),
              "marketingCountry": formData.get("marketingCountry"), "locale": formData.get("locale"),
              "language": formData.get("language")},
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
        <Typography component="h5" variant="h5">
          S'inscrire à l'évènement Sanofi Marcy l'Etoile Activate Science.
        </Typography>
      </Container>
      <Box
        sx={{
          marginTop: 30,
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
            id="emailAddress"
            label="Adresse mail"
            name="emailAddress"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="accountNumber"
            label="Numéro de compte Thermofisher"
            type="text"
            id="accountNumber"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Prénom"
            name="firstName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="company"
            label="Entreprise"
            name="company"
            autoFocus
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            id="businessPhone"
            label="Téléphone de l'entreprise"
            name="businessPhone"
            autoFocus
            type="number"
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
          />
          <TextField
            margin="normal"
            fullWidth
            id="address2"
            label="Addresse 2"
            name="address2"
            autoFocus
            type="text"
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="marketingCountry"
            label="Pays de marketing"
            name="marketingCountry"
            autoFocus
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="locale"
            label="Local"
            name="locale"
            autoFocus
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="language"
            label="Langage"
            name="language"
            autoFocus
            type="text"
          />
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
