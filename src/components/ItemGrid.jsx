import React from 'react';
import { Grid, Box } from '@mui/material';

const ItemGrid = ({ items }) => {
  let gridSpacing = 2;
  let gridJustify = 'center';
  let gridColumns = { xs: 12, sm: 6, md: 4, lg: 3 };

  if (items.length === 3) {
    gridSpacing = 2;
    gridJustify = 'center';
    gridColumns = { xs: 12 };
  }

  if (items.length >= 4) {
    gridSpacing = 2;
    gridJustify = 'center';
    gridColumns = { xs: 12, sm: 6 };
  }

  return (
    <Grid container spacing={gridSpacing} justifyContent={gridJustify}>
      {items.map((item, index) => (
        <Grid item {...gridColumns} key={index}>
          <Box
            sx={{
              backgroundColor: 'lightblue',
              height: '80px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Block {item}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemGrid;
