import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            موضة AI
          </Link>
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            color="inherit" 
            onClick={() => changeLanguage('ar')}
            sx={{ mx: 0.5, fontWeight: i18n.language === 'ar' ? 'bold' : 'normal' }}
          >
            العربية
          </Button>
          <Button 
            color="inherit" 
            onClick={() => changeLanguage('en')}
            sx={{ mx: 0.5, fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}
          >
            English
          </Button>
          <Button 
            color="inherit" 
            onClick={() => changeLanguage('fr')}
            sx={{ mx: 0.5, fontWeight: i18n.language === 'fr' ? 'bold' : 'normal' }}
          >
            Français
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
