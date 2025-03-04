import {  Grid2 as Grid, styled, Typography } from "@mui/material";

interface DeviceCardProps {
    icon: React.ReactElement;
    title: string;
    text: string;
    images?: [];
}

const IconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
    },
});
const ContentCard : React.FC<DeviceCardProps> =({icon,title,text,images}) => {
    return (
        <Grid size={12}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    textAlign: 'center',
                    bgcolor: 'black',
                    borderRadius: 5,
                    height: 400,
                    width:500,
                    p: 2
                }}
            >
                <IconContainer>{icon}</IconContainer>
                <Grid sx={{ marginTop: '8px', fontWeight: 'bold', color: 'white' }}>{title}</Grid>
                <Grid sx={{ marginTop: '4px', color: 'rgba(255, 255, 255, 0.7)' }}>{text}</Grid>
            </Grid>
        </Grid>
    );
};

export default ContentCard;