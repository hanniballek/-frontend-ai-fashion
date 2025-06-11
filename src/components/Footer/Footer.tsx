import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {String(t('footer.about'))}
            </Typography>
            <Typography variant="body2">
              {String(t('footer.aboutText'))}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {String(t('footer.links'))}
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              {String(t('nav.home'))}
            </Link>
            <Link href="/products" color="inherit" display="block" sx={{ mb: 1 }}>
              {String(t('nav.products'))}
            </Link>
            <Link href="/recommendations" color="inherit" display="block" sx={{ mb: 1 }}>
              {String(t('nav.recommendations'))}
            </Link>
            <Link href="/virtual-try-on" color="inherit" display="block" sx={{ mb: 1 }}>
              {String(t('nav.virtualTryOn'))}
            </Link>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {String(t('footer.contact'))}
            </Typography>
            <Typography variant="body2" paragraph>
              {String(t('footer.email'))}: info@fashion-ai.com
            </Typography>
            <Typography variant="body2" paragraph>
              {String(t('footer.phone'))}: +966 123 456 789
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} {String(t('footer.copyright'))}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
