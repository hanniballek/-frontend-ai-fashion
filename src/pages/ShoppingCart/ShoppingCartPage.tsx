import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Divider, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ShoppingCartPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Placeholder cart items
  const cartItems = [
    {
      id: 1,
      name: String(t('shoppingCart.itemExample1')),
      price: 299,
      quantity: 1,
      size: 'M',
      color: 'Black'
    },
    {
      id: 2,
      name: String(t('shoppingCart.itemExample2')),
      price: 199,
      quantity: 2,
      size: 'L',
      color: 'Blue'
    }
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {String(t('shoppingCart.title'))}
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Card key={item.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Box sx={{ 
                          height: 100, 
                          bgcolor: '#f0f0f0', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          borderRadius: 1
                        }}>
                          <Typography variant="body2">{String(t('common.loading'))}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={9}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="h6">{item.name}</Typography>
                          <Typography variant="h6">{item.price * item.quantity} {String(t('common.currency'))}</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {String(t('shoppingCart.size'))}: {item.size} | {String(t('shoppingCart.color'))}: {item.color}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                          <IconButton size="small" sx={{ border: '1px solid #ddd' }}>-</IconButton>
                          <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                          <IconButton size="small" sx={{ border: '1px solid #ddd' }}>+</IconButton>
                          <Button color="error" sx={{ ml: 'auto' }}>
                            {String(t('shoppingCart.remove'))}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6">{String(t('shoppingCart.empty'))}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/products">
                  {String(t('shoppingCart.continueShopping'))}
                </Button>
              </Box>
            )}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {String(t('shoppingCart.orderSummary'))}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                  <Typography>{String(t('shoppingCart.subtotal'))}</Typography>
                  <Typography>{subtotal} {String(t('common.currency'))}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                  <Typography>{String(t('shoppingCart.shipping'))}</Typography>
                  <Typography>{shipping} {String(t('common.currency'))}</Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                  <Typography variant="h6">{String(t('shoppingCart.total'))}</Typography>
                  <Typography variant="h6">{total} {String(t('common.currency'))}</Typography>
                </Box>
                
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  size="large"
                  sx={{ mt: 2 }}
                >
                  {String(t('shoppingCart.checkout'))}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShoppingCartPage;
