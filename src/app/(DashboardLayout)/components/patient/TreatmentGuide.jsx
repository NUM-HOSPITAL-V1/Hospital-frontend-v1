'use client';
import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  IconPill,
  IconCalendarEvent,
  IconHeartPlus,
  IconMassage,
  IconTemperature,
  IconTrekking,
  IconSun,
  IconDroplet
} from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Sample medications data
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

// Sample treatment guides
const treatmentGuides = [
  {
    id: 'TG1001',
    name: 'Бумба тавих эмчилгээ',
    icon: <IconDroplet size={20} />,
    frequency: 'Долоо хоногт 2 удаа',
    duration: '20 минут',
    instructions: 'Хүзүү, нуруунд бумба тавих. Гүн гүн бумбалах. Хэт халуун болгохгүй байх.',
    caution: 'Хэрэв хэт халуу байвал эмчид хэлэх.',
    startDate: '2024-04-20',
    endDate: '2024-05-15',
    totalDays: 25,
    prescribedBy: 'Д.Баярмаа',
    locations: ['Нуруу', 'Хүзүү']
  },
  {
    id: 'TG1002',
    name: 'Увч тавих эмчилгээ',
    icon: <IconTemperature size={20} />,
    frequency: 'Өдөр бүр',
    duration: '15 минут',
    instructions: 'Өвдөж буй тушаа увч тавих. Хэт халуун болгохгүй байх. Халаасан сүүлд заавал духах.',
    caution: 'Халуун увч тавихад арьс улайх нь хэвийн үзэгдэл. Хэрэв өвдөлт эхэлбэл зогсоох.',
    startDate: '2024-04-22',
    endDate: '2024-04-29',
    totalDays: 7,
    prescribedBy: 'Д.Баярмаа',
    locations: ['Өвдөг']
  },
  {
    id: 'TG1003',
    name: 'Шарлага хийх',
    icon: <IconSun size={20} />,
    frequency: 'Долоо хоногт 3 удаа',
    duration: '10 минут',
    instructions: 'Улаан туяагаар шарлага хийх, зайг 30 см-ээс багагүй байлгах.',
    caution: 'Хэрэв арьс улайх эсвэл загатнах эхэлбэл даруй зогсоох.',
    startDate: '2024-04-15',
    endDate: '2024-05-05',
    totalDays: 20,
    prescribedBy: 'Б.Оюунцэцэг',
    locations: ['Нуруу доод хэсэг']
  },
  {
    id: 'TG1004',
    name: 'Массаж хийх',
    icon: <IconMassage size={20} />,
    frequency: 'Долоо хоногт 2 удаа',
    duration: '30 минут',
    instructions: 'Нүсэр массаж, Нуруу, мөр, бүсэлхийд анхаарч хийх.',
    caution: 'Массаж хийлгэсний дараа их ундаа уух.',
    startDate: '2024-04-17',
    endDate: '2024-05-17',
    totalDays: 30,
    prescribedBy: 'Б.Оюунцэцэг',
    locations: ['Нуруу', 'Мөр', 'Бүсэлхий']
  },
  {
    id: 'TG1005',
    name: 'Дасгал хөдөлгөөн',
    icon: <IconTrekking size={20} />,
    frequency: 'Өдөр бүр',
    duration: '15-20 минут',
    instructions: 'Өглөө, орой суниалтын дасгал хийх. Хэт ачаалалтай дасгал хийхгүй байх.',
    caution: 'Өвдөлт мэдрэгдвэл зогсоох.',
    startDate: '2024-04-20',
    endDate: '2024-05-20',
    totalDays: 30,
    prescribedBy: 'Н.Анхбаяр',
    locations: ['Бүх бие']
  }
];

const TreatmentGuide = () => {
  const [tabValue, setTabValue] = useState(0);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('mn-MN', options);
  };

  return (
    <DashboardCard title="Эмчилгээний зөвлөмж">
      <Box sx={{ mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Эмийн жагсаалт" />
          <Tab label="Эмчилгээний заавар" />
        </Tabs>
      </Box>

      {/* Medications Tab */}
      {tabValue === 0 && (
        <>
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
        </>
      )}

      {/* Treatment Guides Tab */}
      {tabValue === 1 && (
        <>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Эмч танд дараах эмчилгээнүүдийг зөвлөж байна
          </Typography>
          
          <Grid container spacing={3}>
            {treatmentGuides.map((treatment) => (
              <Grid item xs={12} md={6} key={treatment.id}>
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
                        {treatment.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          {treatment.name}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                          {treatment.locations.map((location, index) => (
                            <Chip 
                              key={index}
                              label={location} 
                              size="small"
                              variant="outlined"
                              color="secondary"
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    
                    <Divider sx={{ my: 1.5 }} />
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Давтамж:
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {treatment.frequency}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Үргэлжлэх хугацаа:
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {treatment.duration}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary">
                          Хэрэглэх заавар:
                        </Typography>
                        <Typography variant="body1">
                          {treatment.instructions}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Paper variant="outlined" sx={{ p: 1.5, bgcolor: '#fff9c4' }}>
                          <Typography variant="body2" color="warning.dark" fontWeight={500}>
                            Анхааруулга:
                          </Typography>
                          <Typography variant="body2" color="warning.dark">
                            {treatment.caution}
                          </Typography>
                        </Paper>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconCalendarEvent size={16} style={{ marginRight: 6 }} />
                          <Typography variant="body2">
                            {formatDate(treatment.startDate)} - {formatDate(treatment.endDate)} ({treatment.totalDays} өдөр)
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Chip 
                          size="small" 
                          label={`Эмч: ${treatment.prescribedBy}`}
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
        </>
      )}
    </DashboardCard>
  );
};

export default TreatmentGuide;