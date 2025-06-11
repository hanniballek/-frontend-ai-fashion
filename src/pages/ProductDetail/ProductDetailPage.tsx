import React from 'react';
import { Container, Typography, Box, Grid, Button, Divider, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  // Placeholder product data
  const product = {
    id: id,
    name: `${String(t('productDetails.title'))} ${id}`,
    price: 299,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Category A',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue']
  };
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              height: 400, 
              bgcolor: '#f0f0f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 1
            }}>
              <Typography>{String(t('common.loading'))}</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            
            <Typography variant="h5" color="primary" gutterBottom>
              {product.price} {String(t('common.currency'))}
            </Typography>
            
            <Box sx={{ my: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                {String(t('productDetails.sizes'))}:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {product.sizes.map((size) => (
                  <Chip key={size} label={size} variant="outlined" />
                ))}
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                {String(t('productDetails.colors'))}:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {product.colors.map((color) => (
                  <Chip key={color} label={color} variant="outlined" />
                ))}
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Button variant="contained" color="primary">
                {String(t('productDetails.addToCart'))}
              </Button>
              <Button variant="outlined">
                {String(t('productDetails.tryOn'))}
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {String(t('productDetails.description'))}
          </Typography>
          <Typography paragraph>
            {product.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
