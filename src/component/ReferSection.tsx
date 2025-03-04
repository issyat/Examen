import { Box, Button, Container, Grid, Typography } from "@mui/material";
import movies from "../constants/MoviesBanners"

const ReferSection = () => {
    return (
        <Grid container sx={{ bgcolor: "#222", py: 4, color: "orange" }} justifyContent="center">
            <Container>
                <Grid sx={{
                    display: { xs: "block", md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Grid md={6} xs={12} mr={{ xs:0,md: 2 }}>
                        <Box component={"div"} sx={{
                            width: "100%",
                            backgroundImage: `linear-gradient(0deg, rgba(14, 14, 14, 0.63), rgba(0, 0, 0, 0.3)),url(${movies[0].src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: 250,
                        }}
                        >
                            <Grid display={"flex"} justifyContent={"center"}  direction={"column"} sx={{
                                height:"100%",
                                pl:10,
                            }}>
                                <Typography sx={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: { xs: "0.4rem", sm: "0.7rem", md: "1.5rem" },
                                    letterSpacing: ".3rem",
                                    width:400
                                }}>
                                    Refer your acquaintances and earn free or S / months
                                </Typography>
                                <Button variant="outlined" sx={{
                                    color: 'white',
                                    borderColor: 'orange',
                                    p: 1.5,
                                    width:200,
                                    mt:2
                                }}>
                                    Refer here
                                </Button>
                            </Grid>

                        </Box>
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Box component={"div"} sx={{
                            width: "100%",
                            backgroundImage: `linear-gradient(0deg, rgba(14, 14, 14, 0.63), rgba(0, 0, 0, 0.3)),url(${movies[0].src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: 250,
                        }}
                        >
                            <Grid display={"flex"} justifyContent={"center"}  direction={"column"} sx={{
                                height:"100%",
                                pl:10,
                            }}>
                                <Typography sx={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "1.5rem" },
                                    letterSpacing: ".3rem",
                                    width:400
                                }}>
                                    Postulate as a service reseller
                                </Typography>
                                <Button variant="outlined" sx={{
                                    color: 'white',
                                    borderColor: 'orange',
                                    p: 1.5,
                                    width:200,
                                    mt:2
                                }}>
                                    Know more
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid md={12}>
                    <Grid sx={{
                        mt: 4,
                        backgroundImage: `linear-gradient(0deg, rgba(14, 14, 14, 0.63), rgba(0, 0, 0, 0.3)),url(${movies[1].src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 250,
                    }}>
                         <Grid container justifyContent="center" alignItems="center" sx={{height:"100%"}}>
                            <Grid md={6} px={4}>
                                <Typography sx={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "2rem" },
                                    letterSpacing: ".3rem",
               
                                }}>
                                    Don't wait any longer and ask for your free trial now!
                                </Typography>
                            </Grid>

                            <Grid md={6}>
                                <Button variant="contained" sx={{
                                    color: 'white',
                                    backgroundColor: 'orange',
                                    p: 1.5,
                               
                                    mt:2
                                    }}
                                    >
                                    Request your free trial here
                                </Button>
                            </Grid>
                         </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default ReferSection;