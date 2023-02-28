import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

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
                  "accountNumber": formData.accountNumber ? formData.accountNumber : "no number account",
                  "firstName": formData.firstName,
                  "lastName": formData.lastName,
                  "company": formData.company,
                  "businessPhone": formData.businessPhone ? formData.businessPhone : "no phone number",
                  "address1": formData.address1,
                  "city": formData.city,
                  "address2": formData.address2 ? formData.address2 : "no address 2",
                  "zipPostal": formData.zipPostal,
                  "country": formData.country,
                  "title": formData.title
              }
          );
          if(data?.confirmation) {
              navigate(`/qrcode/${formData.emailAddress}`);
          }
      } catch (error) {
          console.error(error);
          return;
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
            label="Nom"
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
            label="Pays"
            name="country"
            autoFocus
            type="text"
            onChange={handleChange}
          />
            {!formData.title || !formData.emailAddress || !formData.firstName || !formData.lastName
                || !formData.company || !formData.address1 || !formData.city || !formData.zipPostal || !formData.country  ?
                <Typography sx={{ mt: 2, color: "red", pb: 2 }} variant="body1" align="center">Veuillez remplir les champs obligatoires</Typography>
                : undefined}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formData.title || !formData.emailAddress || !formData.firstName || !formData.lastName
                || !formData.company || !formData.address1 || !formData.city || !formData.zipPostal || !formData.country }
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
