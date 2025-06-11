import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('home.welcome')}
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary" paragraph>
          {t('home.subtitle')}
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/products">
          {t('home.exploreButton')}
        </Button>
      </Box>
      
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t('home.featuredProducts')}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Placeholder for featured products */}
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Box sx={{ 
                height: 200, 
                bgcolor: '#f0f0f0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 1
              }}>
                <Typography>{t('common.loading')}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
