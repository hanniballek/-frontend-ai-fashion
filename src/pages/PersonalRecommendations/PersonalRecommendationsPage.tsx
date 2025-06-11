import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PersonalRecommendationsPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Placeholder recommendations
  const recommendations = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${String(t('recommendations.item'))} ${i + 1}`,
    category: i % 2 === 0 ? String(t('products.category')) + ' A' : String(t('products.category')) + ' B',
    confidence: Math.floor(Math.random() * 30) + 70 // 70-99% confidence
  }));
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {String(t('recommendations.title'))}
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center">
          {String(t('recommendations.subtitle'))}
        </Typography>
        
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            {recommendations.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
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
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="body2" color="success.main">
                        {item.confidence}% {String(t('recommendations.match'))}
                      </Typography>
                      <Button size="small" variant="outlined">
                        {String(t('recommendations.view'))}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary">
            {String(t('recommendations.updatePreferences'))}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalRecommendationsPage;
