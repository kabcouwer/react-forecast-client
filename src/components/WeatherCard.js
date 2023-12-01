import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ title, content }) => {
  return (
    <Card variant="outlined" style={{ minWidth: '350px' }}>
      <CardContent>
        <Typography variant="h4" component="div" align="center" sx={{ marginTop: 3 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;