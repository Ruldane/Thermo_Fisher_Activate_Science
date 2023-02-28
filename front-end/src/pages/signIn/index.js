import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let formdata = new FormData();

    formdata.append("emailAddress", data.get("emailAddress"));
    formdata.append("accountNumber", data.get("accountNumber"));
    formdata.append("firstName", data.get("firstName"));
    formdata.append("lastName", data.get("lastName"));
    formdata.append("company", data.get("company"));
    formdata.append("businessPhone", data.get("businessPhone"));
    formdata.append("address1", data.get("address1"));
    formdata.append("city", data.get("city"));
    formdata.append("address2", data.get("address2"));
    formdata.append("zipPostal", data.get("zipPostal"));
    formdata.append("country", data.get("country"));
    formdata.append("marketingCountry", data.get("marketingCountry"));
    formdata.append("locale", data.get("locale"));
    formdata.append("language", data.get("language"));

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
            type="number"
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
            name="Nom"
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
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="country"
            label="Country"
            name="Pays"
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
