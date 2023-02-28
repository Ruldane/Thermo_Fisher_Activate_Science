import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

export default function LoginForm() {
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    if (isValidEmail(email)) {
      setLoading(false);
      navigate(`/checkIfUserExist/${email}`);
    } else {
      setLoading(false);
      setError("Votre mail n'est pas valide");
    }
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
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
        variant={matchesSM ? "h3" : "h4"}
        align="center"
      >
        Sanofi Marcy l'Etoile
        <br />
      </Typography>
      <Typography variant="body2" align="center">16 mars 2023 de 9h à 17h</Typography>
      <Typography sx={{ mt: 3 }} align="center">
        Retrouvez les dernières innovations <br />
        de nos fournisseurs partenaires,
        <br />
        permettant d’étendre vos recherches, <br />
        rendre vos analyses plus efficientes et améliorer votre productivité.
      </Typography>
      <Typography sx={{ mt: 2 }} align="center">
        Vous pourrez également profiter <br /> d’une présentation sur la
        cytométrie en flux <br /> par le fournisseur Thermo Scientific <br />
        qui se déroulera de 10h30 à 11h30 (salle Auditorium Bat X South).
      </Typography>
      <Typography sx={{ mt: 2 }} align="center">
        Afin de participer à cet évènement,
        <br />
        merci de vous inscrire en saisissant votre adresse e-mail ci-dessous.
      </Typography>
      <Typography sx={{ mt: 2 }} align="center">
        Vous recevrez par e-mail un lien pour télécharger votre QR code unique
        <br />à présenter le jour de l’évènement.
      </Typography>

      <Box component="form" onSubmit={submitHandler}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="emailAddress"
          label="Email Address"
          name="emailAddress"
          autoFocus
          onChange={(event) => setEmail(event.target.value)}
        />
        {error && (
          <Typography sx={{ color: "red", mt: 1, mb: 1 }}>{error}</Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={!isValidEmail(email)}
        >
          Validez votre inscription
        </Button>
      </Box>
      <Typography sx={{ mt: 3 }} align="center" variant="body2">
        Thermo Fisher Scientific © 2023
      </Typography>
    </Container>
  );
}
