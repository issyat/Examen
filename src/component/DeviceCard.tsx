import React from 'react';
import { Grid, styled } from '@mui/material';

interface DeviceCardProps {
    icon: React.ReactElement;
    type: string;
    text: string;
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

const DeviceCard: React.FC<DeviceCardProps> = ({ icon, type, text }) => {
    return (
        <Grid item xs={12} sm={6} md={4} mt={3}>
            <Grid 
                container 
                direction="column" 
                justifyContent="center" 
                alignItems="center"
                sx={{
                    textAlign: 'center',
                    bgcolor: 'black',
                    borderRadius: 5,
                    height: 200,
                    p: 2
                }}
            >
                <IconContainer>{icon}</IconContainer>
                <Grid sx={{ marginTop: '8px', fontWeight: 'bold', color: 'white' }}>{type}</Grid>
                <Grid sx={{ marginTop: '4px', color: 'rgba(255, 255, 255, 0.7)' }}>{text}</Grid>
            </Grid>
        </Grid>
    );
};

export default DeviceCard;
