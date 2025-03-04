import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import ab from "../assets/images/ab.jpg";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';

const WhyChooseUsSection = () => {
    return (
        <Grid container sx={{
            bgcolor: "black",
        }}>
            <Container sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <Grid size={{ xs: 12, sm: 12, md:6 }} mt={3}>
                        <Typography sx={{
                            color: "gray",
                            fontWeight: 700,
                            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                            letterSpacing: ".3rem",
                            mt: { xs: 2, md: 0 },
                        }}>
                            WHY CHOOSE US
                        </Typography>

                        <Typography sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                            letterSpacing: ".3rem",
                            mt: 2,
                        }}>
                            Get all the series, movies, and live channels in one place
                        </Typography>
                        <Typography sx={{
                            color: "gray",
                            mt: 2,
                        }}>
                            You don't need to subscribe to multiple platforms; Flix Prime offers content consolidation from various platforms, premium channels, live television and sports, all in one place and at an unbeatable price.
                        </Typography>

                        <Grid container mt={3} >
                            <Grid size={6} container>
                                <Grid>
                                    <HeadsetMicIcon sx={{
                                        color: "orange"
                                    }} />
                                </Grid>
                                <Grid container display={"flex"} direction="column" >
                                    <Grid>
                                        <Typography sx={{
                                            color: "white",
                                            fontWeight: 700,
                                        }}>
                                            24/7 support
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{
                                        width: "60%"
                                    }}>
                                        <Typography sx={{
                                            color: "gray",
                                        }}>
                                            We have permamentary personalized attention.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={6} container >
                                <Grid>
                                    <LanguageIcon sx={{
                                        color: "orange"
                                    }} />
                                </Grid>
                                <Grid container display={"flex"} direction="column" >
                                    <Grid>
                                        <Typography sx={{
                                            color: "white",
                                            fontWeight: 700,
                                        }}>
                                            Activation in 5 minutes
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{
                                        width: "60%"
                                    }}>
                                        <Typography sx={{
                                            color: "gray",
                                        }}>
                                            Only a 30mb Internet connection is required
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        size={{ xs: 12, sm: 12, md:6 }} 
                        sx={{
                            display: "flex",
                            flexDirection: "column", 
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative"
                        }}
                    >
                        {/* Image Box */}
                        <Box component="img" src={ab} sx={{
                            width: "80%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }} />

                        {/* Floating Box (Moves below on small screens) */}
                        <Box sx={{
                            bgcolor: "orange",
                            borderRadius: "5px",
                            textAlign: "center",
                            width: { xs: "100%", sm: "100%", md:"auto" }, 
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                            position: { sm: "static", md: "absolute" },
                            bottom: { sm: "10%" },
                            left: { sm: "50%" }, 
                            transform: { md: "translateX(-130%) translateY(25%)" },
                            p:{ xs: 1, sm: 2, md: 3 },
                        }}>
                            <Typography sx={{ 
                                fontWeight: 700,
                                fontSize:{ xs: "1.5rem", sm: "1rem", md: "2rem" },
                                color: "white"
                             }}>
                                S / 19.90
                            </Typography>
                            <Typography sx={{ 
                                fontSize: {xs: "0.5rem", sm: "0.6rem", md: "0.7rem" },
                                color: "white"
                                }}>
                                BY MONTH (up to 3 devices)
                            </Typography>
                        </Box>
                    </Grid>


                </Grid>


            </Container>
        </Grid>
    );
};

export default WhyChooseUsSection;