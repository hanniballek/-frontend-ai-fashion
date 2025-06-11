import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';

const VirtualTryOnPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {String(t('virtualTryOn.title'))}
        </Typography>
        
        <Typography variant="subtitle1" paragraph align="center">
          {String(t('virtualTryOn.subtitle'))}
        </Typography>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label={String(t('virtualTryOn.uploadPhoto'))} />
            <Tab label={String(t('virtualTryOn.takePhoto'))} />
            <Tab label={String(t('virtualTryOn.useAvatar'))} />
          </Tabs>
        </Box>
        
        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  border: '2px dashed #ccc',
                  borderRadius: 2,
                  p: 8,
                  mb: 3,
                  maxWidth: 500,
                  mx: 'auto',
                  cursor: 'pointer'
                }}
              >
                <Typography>{String(t('virtualTryOn.dragAndDrop'))}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {String(t('virtualTryOn.or'))}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  {String(t('virtualTryOn.browseFiles'))}
                </Button>
              </Box>
            </Box>
          )}
          
          {activeTab === 1 && (
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  border: '2px solid #ccc',
                  borderRadius: 2,
                  p: 8,
                  mb: 3,
                  maxWidth: 500,
                  mx: 'auto',
                  bgcolor: '#f0f0f0'
                }}
              >
                <Typography>{String(t('virtualTryOn.cameraPlaceholder'))}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  {String(t('virtualTryOn.capturePhoto'))}
                </Button>
              </Box>
            </Box>
          )}
          
          {activeTab === 2 && (
            <Box sx={{ textAlign: 'center' }}>
              <Grid container spacing={3} justifyContent="center">
                {[1, 2, 3, 4].map((avatar) => (
                  <Grid item xs={6} sm={3} key={avatar}>
                    <Card sx={{ cursor: 'pointer' }}>
                      <Box
                        sx={{
                          height: 150,
                          bgcolor: '#f0f0f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography>{String(t('virtualTryOn.avatar'))} {avatar}</Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
        
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom>
            {String(t('virtualTryOn.selectProduct'))}
          </Typography>
          
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={6} sm={3} key={item}>
                <Card sx={{ cursor: 'pointer' }}>
                  <Box
                    sx={{
                      height: 150,
                      bgcolor: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>{String(t('common.loading'))}</Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="body1">
                      {String(t('virtualTryOn.productExample'))} {item}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" disabled>
            {String(t('virtualTryOn.tryItOn'))}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default VirtualTryOnPage;
