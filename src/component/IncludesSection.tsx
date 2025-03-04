import { Container, Grid, Typography } from "@mui/material";
import IncludeCard from "../component/IncludeCard"
import TheatersIcon from '@mui/icons-material/Theaters';

const IncludesSection = () => {
    return (
        <Grid container sx={{ bgcolor: "black", py: 4, color: "orange" }} justifyContent="center">
            <Container>
                <Grid>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        textAlign: 'center',
                        color: 'white',
                        mb: 4
                    }}>
                        Includes
                    </Typography>
                </Grid>
                <Grid container spacing={3} justifyContent="center">
                    <IncludeCard icon={<TheatersIcon />} title="+1400 live TV channels" text="Local and international television from more than 30 countries and the main channel channels." />
                    <IncludeCard icon={<TheatersIcon />} title="+2500 Series" text="Hundreds of series from the main platforms, plus classic seris" />
                    <IncludeCard icon={<TheatersIcon />} title="+13000 movies" text="Premiere films, leading platform films, Latin cinema and film classics." />
                    <IncludeCard icon={<TheatersIcon />} title="All live sports" text="All world football live and more sports: F1, Tennis, NBA, NFL, UFC and much more." />
                    <IncludeCard icon={<TheatersIcon />} title="+1400 live TV channels" text="Local and international television from more than 30 countries and the main channel channels." />
                    <IncludeCard icon={<TheatersIcon />} title="+2500 Series" text="Hundreds of series from the main platforms, plus classic seris" />
                    <IncludeCard icon={<TheatersIcon />} title="+13000 movies" text="Premiere films, leading platform films, Latin cinema and film classics." />
                    <IncludeCard icon={<TheatersIcon />} title="All live sports" text="All world football live and more sports: F1, Tennis, NBA, NFL, UFC and much more." />
                </Grid>
            </Container>
        </Grid>
    );
}

export default IncludesSection;