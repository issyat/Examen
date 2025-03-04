import { Box, Button, Container, Grid2 as Grid, Typography } from "@mui/material"
import Slider from "react-slick";
import movies from "../constants/MoviesBanners"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Carousel = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };


    return (
        <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <Slider {...settings}>
                {movies.map((movie, index) => {
                    return (
                        <Box key={index} component={"div"} sx={{
                            width: "100%",
                            height: "100vh",
                            backgroundImage: `linear-gradient(0deg, rgba(14, 14, 14, 0.63), rgba(0, 0, 0, 0.3)),url(${movie.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>

                            <Grid container alignContent={"center"} justifyContent="center" alignItems="center" sx={{
                                height: "100%",
                            }}>
                                    <Container sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",

                                        }}>
                                        <Grid size={6}>
                                            <Typography sx={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                                                letterSpacing: ".3rem",
                                            }}>
                                                TODO POR SOLO S/19.90 AL MES
                                            </Typography>
                                            <Typography sx={{
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                                                letterSpacing: ".3rem",
                                            }}>
                                                {movie.title}
                                            </Typography>
                                            <Button variant="contained" sx={{
                                                color: 'white',
                                                backgroundColor: 'orange',
                                                p: 1.5
                                            }}>
                                                Pruebalo gratis
                                            </Button>
                                        </Grid>
                                        <Grid size={6} sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer"
                                        }}>
                                            <PlayCircleIcon sx={{ color: "white", fontSize: "5rem" }} />
                                        </Grid>
                                    </Container> 
                            </Grid>
                        </Box>
                    );
                })}
            </Slider>
        </Box>
    );
};

export default Carousel;