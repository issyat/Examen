
import React from "react";
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: "#ff8000", fontWeight: "bold" }}>
              FLIX PRIME
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Leading IPTV service with all programming in one place. With Flix Prime you don't need any more platforms.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <GoogleIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Countries Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Countries</Typography>
            {["Peru", "Ecuador", "Colombia", "Argentina", "Chile"].map((country) => (
              <Typography key={country} variant="body2" sx={{ mt: 1 }}>
                {country}
              </Typography>
            ))}
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Links</Typography>
            {['TV guide', 'Queries', 'Hire', 'Test demo', 'FAQs'].map((link) => (
              <Typography key={link} variant="body2" sx={{ mt: 1 }}>
                {link}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #333", pt: 2 }}>
          <Typography variant="body2">
            © 2024 Flix Prime. All in one place
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Terms and conditions</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
