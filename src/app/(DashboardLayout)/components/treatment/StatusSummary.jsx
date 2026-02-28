import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const StatusCard = ({ title, count, borderColor }) => (
  <Card sx={{ borderRadius: 2, borderLeft: `4px solid ${borderColor}`, height: '100%' }}>
    <CardContent sx={{ p: 2 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="600" sx={{ mt: 1 }}>
        {count}
      </Typography>
    </CardContent>
  </Card>
);

const StatusSummary = ({ treatments }) => {
  const waitingCount = treatments.filter(t => t.status === 'Хүлээгдэж буй').length;
  const inProgressCount = treatments.filter(t => t.status === 'Хийгдэж буй').length;
  const completedCount = treatments.filter(t => t.status === 'Дууссан').length;

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4}>
        <StatusCard 
          title="Хүлээгдэж буй" 
          count={waitingCount} 
          borderColor="#ff9800" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatusCard 
          title="Хийгдэж буй" 
          count={inProgressCount} 
          borderColor="#03a9f4" 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatusCard 
          title="Дууссан" 
          count={completedCount} 
          borderColor="#4caf50" 
        />
      </Grid>
    </Grid>
  );
};

export default StatusSummary;