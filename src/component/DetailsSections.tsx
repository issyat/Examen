import { Container, Grid } from "@mui/material";
import DetailCard from "./DetailCard";
import AppsIcon from '@mui/icons-material/Apps';

const DetailsSections = () => {
    return (
        <Grid container sx={{ bgcolor: "black", py: 4, color: "orange" }} justifyContent="center">
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <DetailCard icon={<AppsIcon />} title="+1400 live TV channels" text="Local and international television from more than 30 countries and the main channel channels." />
                    <DetailCard icon={<AppsIcon />} title="+2500 Series" text="Hundreds of series from the main platforms, plus classic seris" />
                    <DetailCard icon={<AppsIcon />} title="+13000 movies" text="Premiere films, leading platform films, Latin cinema and film classics." />
                    <DetailCard icon={<AppsIcon />} title="All live sports" text="All world football live and more sports: F1, Tennis, NBA, NFL, UFC and much more." />
                </Grid>
            </Container>
        </Grid>
    );
    };

export default DetailsSections;