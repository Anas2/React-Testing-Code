import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid'; // Grid version 1
import React from 'react';

function Header(props) {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{textAlign:"center"}}>
                <Grid item xs={12} md={6}>
                    <Item>1</Item>
                    <Box>
                        <TextField variant='standard' label="anas" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;