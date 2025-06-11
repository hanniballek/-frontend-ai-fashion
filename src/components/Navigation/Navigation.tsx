import React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Box component="nav" sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      bgcolor: '#f8f8f8', 
      py: 1,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button color="inherit" sx={{ mx: 1 }}>
          {String(t('nav.home'))}
        </Button>
      </Link>
      
      <Link to="/products" style={{ textDecoration: 'none' }}>
        <Button color="inherit" sx={{ mx: 1 }}>
          {String(t('nav.products'))}
        </Button>
      </Link>
      
      <Link to="/recommendations" style={{ textDecoration: 'none' }}>
        <Button color="inherit" sx={{ mx: 1 }}>
          {String(t('nav.recommendations'))}
        </Button>
      </Link>
      
      <Link to="/virtual-try-on" style={{ textDecoration: 'none' }}>
        <Button color="inherit" sx={{ mx: 1 }}>
          {String(t('nav.virtualTryOn'))}
        </Button>
      </Link>
      
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button color="inherit" sx={{ mx: 1 }}>
          {String(t('nav.login'))}
        </Button>
      </Link>
    </Box>
  );
};

export default Navigation;
