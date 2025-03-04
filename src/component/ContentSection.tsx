import { Container, Grid2 as Grid, Typography } from "@mui/material";
import DeviceCard from "./DeviceCard";
import TheatersIcon from '@mui/icons-material/Theaters';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PublicIcon from '@mui/icons-material/Public';
const ContentSection = () => {
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
                        Content
                    </Typography>
                </Grid>
                <Grid container size={12} spacing={3} justifyContent="center">    
                    <DeviceCard icon={<TheatersIcon />} type="Current series and movies" text="Available on all Smart TVs of any brand" />
                    <DeviceCard icon={<SportsVolleyballIcon />} type="All world football live" text="Smartphone or Tablet with Android or iOS system" />
                    <DeviceCard icon={<SportsBasketballIcon />} type="More sports and live fighting" text="You can use it from your laptop or desktop PC." />
                    <DeviceCard icon={<PlayCircleIcon />} type="Live TV Peru" text="Available on all Smart TVs of any brand" />
                    <DeviceCard icon={<PublicIcon />} type="All local live TV" text="Smartphone or Tablet with Android or iOS system" />
                    <DeviceCard icon={<PublicIcon />} type="Internation Premium" text="You can use it from your laptop or desktop PC." />
                </Grid>
            </Container>
        </Grid>
    );
    }

export default ContentSection;