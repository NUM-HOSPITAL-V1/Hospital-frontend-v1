import React from 'react';
import { 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Typography, 
  Avatar 
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const PatientInfoCard = ({ patient }) => {
  const { patientName, patientId, doctorName, scheduledDate, scheduledTime, diagnosis } = patient;
  
  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: 'primary.light', width: 40, height: 40, mr: 1.5 }}>
                <PersonIcon />
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight="600">
                  {patientName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {patientId}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'flex-end' }
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Эмч: {doctorName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Огноо: {scheduledDate}, {scheduledTime}
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Онош: {diagnosis}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PatientInfoCard;