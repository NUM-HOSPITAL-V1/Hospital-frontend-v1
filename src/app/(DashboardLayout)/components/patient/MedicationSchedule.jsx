'use client';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Button,
  Divider
} from '@mui/material';
import {
  IconPill,
  IconCalendarEvent,
  IconHeartPlus,
  IconAlarm
} from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Sample medications data - simplified
const medications = [
  {
    id: 'MED1001',
    name: 'Амоксициллин',
    icon: <IconPill size={20} />,
    dosage: '500мг',
    frequency: 'Өдөрт 3 удаа',
    instructions: 'Хоолтой хамт ууна',
    startDate: '2024-04-20',
    endDate: '2024-04-27',
    totalDays: 7,
    prescribedBy: 'Д.Баярмаа'
  },
  {
    id: 'MED1002',
    name: 'Аспирин',
    icon: <IconHeartPlus size={20} />,
    dosage: '81мг',
    frequency: 'Өдөрт 1 удаа',
    instructions: 'Өглөөний хоолтой хамт ууна',
    startDate: '2024-04-15',
    endDate: '2024-05-15',
    totalDays: 30,
    prescribedBy: 'Н.Анхбаяр'
  },
  {
    id: 'MED1003',
    name: 'Диклофенак',
    icon: <IconPill size={20} />,
    dosage: '50мг',
    frequency: 'Өдөрт 2 удаа',
    instructions: 'Хоолтой хамт ууна, ходоод өвдөж байвал эмчид хандах',
    startDate: '2024-04-22',
    endDate: '2024-04-29',
    totalDays: 7,
    prescribedBy: 'Д.Баярмаа'
  }
];

const MedicationSchedule = () => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('mn-MN', options);
  };

  return (
    <DashboardCard title="Эмийн жагсаалт">
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Эмч танд дараах эмүүдийг бичиж өгсөн байна
      </Typography>
      
      <Grid container spacing={3}>
        {medications.map((medication) => (
          <Grid item xs={12} md={6} lg={4} key={medication.id}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                      mr: 2
                    }}
                  >
                    {medication.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {medication.name}
                    </Typography>
                    <Typography variant="body2">
                      {medication.dosage}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 1.5 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Хэдэн удаа:
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {medication.frequency}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Хугацаа:
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {medication.totalDays} өдөр
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Typography variant="body2" color="textSecondary">
                      Хэрэглэх заавар:
                    </Typography>
                    <Typography variant="body1">
                      {medication.instructions}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconCalendarEvent size={16} style={{ marginRight: 6 }} />
                      <Typography variant="body2">
                        {formatDate(medication.startDate)} - {formatDate(medication.endDate)}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Chip 
                      size="small" 
                      label={`Эмч: ${medication.prescribedBy}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    
    </DashboardCard>
  );
};

export default MedicationSchedule;