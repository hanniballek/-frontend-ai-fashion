import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductListingPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Placeholder products
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${String(t('products.title'))} ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 100,
    category: i % 2 === 0 ? String(t('products.category')) + ' A' : String(t('products.category')) + ' B'
  }));
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {String(t('products.title'))}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ width: '70%' }}>
            <input
              type="text"
              placeholder={String(t('products.search'))}
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </Box>
          <Box>
            <Button variant="outlined" sx={{ mr: 1 }}>
              {String(t('products.filter'))}
            </Button>
            <Button variant="outlined">
              {String(t('products.sort'))}
            </Button>
          </Box>
        </Box>
        
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{ height: 140, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {String(t('common.loading'))}
                  </Typography>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {product.price} {String(t('common.currency'))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{String(t('products.tryOn'))}</Button>
                  <Button size="small" color="primary">{String(t('products.addToCart'))}</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductListingPage;
