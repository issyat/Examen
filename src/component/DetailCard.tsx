import { Grid, styled } from "@mui/material";
import React from "react";

interface DetailCardProps {
    icon: React.ReactElement;
    title: string;
    text: string;
}

const IconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(23, 23, 23, 0.97)',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
    },
});

const DetailCard: React.FC<DetailCardProps> = ({ icon, title, text }) => {
    return (
        <Grid item xs={12} sm={6} md={6}>
            <Grid
                container
                direction="row"  
                alignItems="center" 
                sx={{
                    textAlign: 'left',
                    bgcolor: '#222',
                    borderRadius: 3,
                    height: 200,
                    p: 3,
                    display: 'flex',  }}
            >
                {/* Icon on the left */}
                <Grid item>
                    <IconContainer>{icon}</IconContainer>
                </Grid>

                {/* Title and text on the right */}
                <Grid item sx={{ ml: 2, flex: 1 }}>
                    <Grid sx={{ fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>
                        {title}
                    </Grid>
                    <Grid sx={{ marginTop: '4px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {text}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};


export default DetailCard;
