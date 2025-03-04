import { Container, Grid } from "@mui/material";
import DeviceCard from "./DeviceCard";
import TvIcon from '@mui/icons-material/Tv';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const FromAnyDeviceSection = () => {
    return (
        <Grid container sx={{ bgcolor: "#222", py: 4, color: "orange" }} justifyContent="center">
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <DeviceCard icon={<TvIcon />} type="Smart TV" text="Available on all Smart TVs of any brand" />
                    <DeviceCard icon={<SmartphoneIcon />} type="Smartphone" text="Smartphone or Tablet with Android or iOS system" />
                    <DeviceCard icon={<LaptopChromebookIcon />} type="PC / Laptop" text="You can use it from your laptop or desktop PC." />
                </Grid>
            </Container>
        </Grid>
    );
};

export default FromAnyDeviceSection;
