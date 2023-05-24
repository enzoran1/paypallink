
import './App.scss';
import * as React from 'react';


import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import IconPaypal from './assets/paypal.png';
import PhotoEnzo from './assets/enzo.jpeg';



function App() {

  const handleDonateClick = () => {
    // Logique pour rediriger vers le lien de don PayPal
    // Remplacez le lien ci-dessous par votre propre lien de don PayPal
    window.location.href = 'https://paypal.me/enzofranceschini57?country.x=FR&locale.x=fr_FR';
  };
  
  return (
    <div className='container-card'>
    <Card sx={{ width: 400, position : 'relative' }}>
    <CardContent sx={{ textAlign: 'center' }}>
      <img src={PhotoEnzo} alt="Photo de profil" style={{ borderRadius: '50%', width: 150, height: 150 }} />
      <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
        Enzo Francechini
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
        Développeur web
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
    <a href="https://www.instagram.com/enzo_f_r/" target='_blank'>
      <IconButton aria-label="Instagram" sx={{ color: '#C13584' }}>
        <Instagram />
      </IconButton>
      </a>
      <a href="https://www.facebook.com/enzo.franceschini.9/" target='_blank'>
      <IconButton aria-label="Facebook" sx={{ color: '#1877F2' }}>
        <Facebook />
      </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/enzo-franceschini-5191a41b6/" target='_blank'>
      <IconButton aria-label="LinkedIn" sx={{ color: '#0A66C2' }}>
        <LinkedIn />
      </IconButton>
      </a>
      
    </CardActions>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button onClick={handleDonateClick} variant="contained" sx={{ backgroundColor: '#f50057', color: '#fff' }}>
        <img src={IconPaypal} alt="Logo PayPal" style={{ marginRight: 8, height: 20 }} />
        Faire un don
      </Button>
    </CardActions>
  </Card>
  </div>
    

  );
}

export default App;
