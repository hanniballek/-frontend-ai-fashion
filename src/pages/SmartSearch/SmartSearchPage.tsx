import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SmartSearchPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {String(t('smartSearch.title'))}
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center">
          {String(t('smartSearch.subtitle'))}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          gap: 2, 
          maxWidth: 800, 
          mx: 'auto',
          my: 4
        }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={String(t('smartSearch.placeholder'))}
            InputProps={{
              sx: { borderRadius: 28 }
            }}
          />
          <Button 
            variant="contained" 
            color="primary"
            sx={{ 
              borderRadius: 28,
              px: 4,
              height: { sm: 56 }
            }}
          >
            {String(t('common.search'))}
          </Button>
        </Box>
        
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            {String(t('smartSearch.suggestions'))}
          </Typography>
          
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {String(t('smartSearch.suggestion'))} {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {String(t('smartSearch.sampleQuery'))}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SmartSearchPage;
