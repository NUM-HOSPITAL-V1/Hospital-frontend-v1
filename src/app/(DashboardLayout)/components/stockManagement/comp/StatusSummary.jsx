import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { isNearExpiry } from '../helper';


const StatusSummary = ({ stockItems }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ 
          borderRadius: 2, 
          borderLeft: '4px solid #4caf50',
          height: '100%'
        }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Нийт бараа
            </Typography>
            <Typography variant="h4" fontWeight="600" sx={{ mt: 1 }}>
              {stockItems.length}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Нийт {stockItems.reduce((acc, item) => acc + item.quantity, 0)} нэгж
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ 
          borderRadius: 2, 
          borderLeft: '4px solid #f44336',
          height: '100%'
        }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Нөөц дуусаж байгаа
            </Typography>
            <Typography variant="h4" fontWeight="600" sx={{ mt: 1 }}>
              {stockItems.filter(item => item.status === 'Дахин захиалах' || item.status === 'Дуусаж байгаа').length}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Яаралтай нөхөн дүүргэх шаардлагатай
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ 
          borderRadius: 2, 
          borderLeft: '4px solid #ff9800',
          height: '100%'
        }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Хугацаа дуусах дөхсөн
            </Typography>
            <Typography variant="h4" fontWeight="600" sx={{ mt: 1 }}>
              {stockItems.filter(item => isNearExpiry(item)).length}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              3 сарын дотор хугацаа дуусах
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ 
          borderRadius: 2, 
          borderLeft: '4px solid #2196f3',
          height: '100%'
        }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Нийт үнэ цэнэ
            </Typography>
            <Typography variant="h4" fontWeight="600" sx={{ mt: 1 }}>
              {new Intl.NumberFormat('mn-MN', { style: 'currency', currency: 'MNT', maximumFractionDigits: 0 }).format(
                stockItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Агуулахын нийт үнэ цэнэ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatusSummary;