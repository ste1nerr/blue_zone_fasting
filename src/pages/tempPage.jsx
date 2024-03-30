import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import ItemGrid from '@/components/ItemGrid';



const TempPage = () => {
  const items = [1, 2, 3]; 

  return (
    <Container>
      <ItemGrid items={items} />
    </Container>
  );
};
export default TempPage;
