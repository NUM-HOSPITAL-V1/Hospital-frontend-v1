import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
  Chip,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  IconEdit,
  IconUserCircle,
  IconPhone,
  IconMail,
  IconMapPin,
  IconCalendarEvent,
  IconBuildingHospital,
  IconStethoscope,
  IconHeartbeat,
  IconPill,
  IconAlertTriangle,
  IconBell,
  IconBrandWhatsapp,
  IconDeviceMobile,
  IconLock,
  IconFileUpload,
  IconCamera,
  IconShield,
  IconId,
  IconCalendar,
  IconGenderMale,
  IconGenderFemale,
  IconDeviceMobileMessage,
  IconBuildingCommunity,
  IconBellRinging,
  IconCheck,
  IconAmbulance,
  IconClipboardText
} from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Sample patient profile data
const patientData = {
  id: 'P-101',
  name: 'Батсайхан Дорж',
  gender: 'Эрэгтэй',
  birthDate: '1990-01-15',
  age: 34,
  address: 'Баянзүрх дүүрэг, 14-р хороо, 45-р байр, 123 тоот',
  phone: '99887766',
  email: 'batsaikhan@example.mn',
  emergencyContact: 'Баясгалан Бат (Эхнэр) - 99112233',
  registrationDate: '2023-10-12',
  insuranceNumber: 'INS123456789',
  insuranceProvider: 'Нийгмийн даатгал',
  insuranceExpiry: '2025-12-31',
  primaryDoctor: 'Д.Баярмаа',
  department: 'Дотрын тасаг',
  allergies: ['Пенициллин', 'Хүнсний будаг'],
  medicalConditions: ['Даралт ихсэлт', 'Чихрийн шижин 2-р хэлбэр'],
  bloodType: 'A+',
  height: 178,
  weight: 82,
  bmi: 25.9,
  lastAppointment: '2024-04-15',
  nextAppointment: '2024-04-30 09:30'
};

// Notification preferences
const notificationPreferences = [
  {
    id: 'not1',
    type: 'appointment',
    title: 'Цагийн сануулга',
    description: 'Цаг товлосон өдрөөс 24 цагийн өмнө',
    enabled: true
  },
  {
    id: 'not2',
    type: 'medication',
    title: 'Эмийн сануулга',
    description: 'Эм уух цагаас 15 минутын өмнө',
    enabled: true
  },
  {
    id: 'not3',
    type: 'results',
    title: 'Шинжилгээний үр дүн',
    description: 'Шинжилгээний хариу гарсан даруйд',
    enabled: true
  },
  {
    id: 'not4',
    type: 'general',
    title: 'Ерөнхий мэдэгдэл',
    description: 'Эмнэлгийн мэдээ, мэдээлэл',
    enabled: false
  },
  {
    id: 'not5',
    type: 'emergency',
    title: 'Яаралтай мэдэгдэл',
    description: 'Яаралтай үед холбоо барих',
    enabled: true
  }
];

const ProfileInfo = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editField, setEditField] = useState('');
  const [editValue, setEditValue] = useState('');
  const [notificationPrefs, setNotificationPrefs] = useState(notificationPreferences);
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  // Handle opening edit dialog
  const handleOpenEditDialog = (field, value) => {
    setEditField(field);
    setEditValue(value);
    setEditDialogOpen(true);
  };
  
  // Handle notification preference change
  const handleNotificationChange = (id, checked) => {
    setNotificationPrefs(
      notificationPrefs.map(pref => 
        pref.id === id ? { ...pref, enabled: checked } : pref
      )
    );
  };
  
  // Get field label
  const getFieldLabel = (field) => {
    const labels = {
      phone: 'Утасны дугаар',
      email: 'И-мэйл хаяг',
      address: 'Гэрийн хаяг',
      emergencyContact: 'Яаралтай үед холбоо барих',
      height: 'Өндөр (см)',
      weight: 'Жин (кг)'
    };
    return labels[field] || field;
  };
  
  // Get notification icon
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'appointment':
        return <IconCalendarEvent size={20} />;
      case 'medication':
        return <IconPill size={20} />;
      case 'results':
        return <IconClipboardText size={20} />;
      case 'general':
        return <IconBell size={20} />;
      case 'emergency':
        return <IconAmbulance size={20} />;
      default:
        return <IconBell size={20} />;
    }
  };
  
  return (
    <DashboardCard title="Хувийн мэдээлэл">
      <Box sx={{ mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            icon={<IconUserCircle size={18} />} 
            label="Ерөнхий" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconStethoscope size={18} />} 
            label="Эрүүл мэнд" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconShield size={18} />} 
            label="Даатгал" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconBellRinging size={18} />} 
            label="Мэдэгдэл" 
            iconPosition="start" 
          />
        </Tabs>
      </Box>
      
      {/* General Information Tab */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 40,
                    mb: 2,
                    position: 'relative'
                  }}
                >
                  {patientData.name.charAt(0)}
                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                      width: 32,
                      height: 32
                    }}
                  >
                    <IconCamera size={16} />
                  </IconButton>
                </Avatar>
                <Typography variant="h6" fontWeight={600}>
                  {patientData.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  ID: {patientData.id}
                </Typography>
                <Chip 
                  label={patientData.department} 
                  color="primary" 
                  size="small" 
                  sx={{ mt: 1 }}
                />
                <Box sx={{ width: '100%', mt: 3 }}>
                  <List disablePadding>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <IconId size={20} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Регистрийн дугаар" 
                        secondary="ФВ********"
                        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        secondaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <IconCalendar size={20} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Төрсөн огноо" 
                        secondary={new Date(patientData.birthDate).toLocaleDateString('mn-MN')}
                        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        secondaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {patientData.gender === 'Эрэгтэй' ? (
                          <IconGenderMale size={20} />
                        ) : (
                          <IconGenderFemale size={20} />
                        )}
                      </ListItemIcon>
                      <ListItemText 
                        primary="Хүйс" 
                        secondary={patientData.gender}
                        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        secondaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      />
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <IconPhone size={20} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Утасны дугаар" 
                        secondary={patientData.phone}
                        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        secondaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      />
                      <IconButton 
                        size="small" 
                        color="primary"
                        onClick={() => handleOpenEditDialog('phone', patientData.phone)}
                      >
                        <IconEdit size={16} />
                      </IconButton>
                    </ListItem>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <IconMail size={20} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="И-мэйл хаяг" 
                        secondary={patientData.email}
                        primaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                        secondaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      />
                      <IconButton 
                        size="small" 
                        color="primary"
                        onClick={() => handleOpenEditDialog('email', patientData.email)}
                      >
                        <IconEdit size={16} />
                      </IconButton>
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Холбоо барих мэдээлэл
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                      Гэрийн хаяг
                    </Typography>
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleOpenEditDialog('address', patientData.address)}
                    >
                      <IconEdit size={16} />
                    </IconButton>
                  </Box>
                  <Typography variant="body2">
                    {patientData.address}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="body2" color="textSecondary">
                      Яаралтай үед холбоо барих
                    </Typography>
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleOpenEditDialog('emergencyContact', patientData.emergencyContact)}
                    >
                      <IconEdit size={16} />
                    </IconButton>
                  </Box>
                  <Typography variant="body2">
                    {patientData.emergencyContact}
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Эмнэлгийн мэдээлэл
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Бүртгүүлсэн огноо
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {new Date(patientData.registrationDate).toLocaleDateString('mn-MN')}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Хариуцсан эмч
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {patientData.primaryDoctor}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Сүүлийн үзлэг
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {new Date(patientData.lastAppointment).toLocaleDateString('mn-MN')}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Дараагийн үзлэг
                      </Typography>
                      <Chip 
                        label={new Date(patientData.nextAppointment).toLocaleString('mn-MN')} 
                        color="primary" 
                        size="small" 
                      />
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<IconLock size={16} />}
                  >
                    Нууц үг солих
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      
      {/* Health Information Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Биеийн үзүүлэлт
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                        <Typography variant="body2" color="textSecondary">
                          Өндөр
                        </Typography>
                        <IconButton 
                          size="small" 
                          color="primary"
                          onClick={() => handleOpenEditDialog('height', patientData.height.toString())}
                        >
                          <IconEdit size={16} />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" fontWeight={500}>
                        {patientData.height} см
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                        <Typography variant="body2" color="textSecondary">
                          Жин
                        </Typography>
                        <IconButton 
                          size="small" 
                          color="primary"
                          onClick={() => handleOpenEditDialog('weight', patientData.weight.toString())}
                        >
                          <IconEdit size={16} />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" fontWeight={500}>
                        {patientData.weight} кг
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        БЖИ (BMI)
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {patientData.bmi} ({patientData.bmi < 18.5 ? 'Жингийн дутагдалтай' : patientData.bmi < 25 ? 'Хэвийн' : patientData.bmi < 30 ? 'Илүүдэл жинтэй' : 'Таргалалттай'})
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Цусны бүлэг
                      </Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {patientData.bloodType}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Эмийн харшил
                  </Typography>
                  {patientData.allergies.length > 0 ? (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {patientData.allergies.map((allergy, index) => (
                        <Chip 
                          key={index}
                          label={allergy} 
                          color="error" 
                          size="small" 
                          icon={<IconAlertTriangle size={14} />}
                        />
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body2">
                      Мэдээлэл байхгүй
                    </Typography>
                  )}
                </Box>
                
                <Box>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Өвчлөл
                  </Typography>
                  {patientData.medicalConditions.length > 0 ? (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {patientData.medicalConditions.map((condition, index) => (
                        <Chip 
                          key={index}
                          label={condition} 
                          color="primary" 
                          size="small" 
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body2">
                      Мэдээлэл байхгүй
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Сүүлийн амин үзүүлэлт
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Зүрхний цохилт
                      </Typography>
                      <Typography variant="h6" fontWeight={600} color="primary">
                        75 <Typography component="span" variant="body2" color="textSecondary">bpm</Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Цусны даралт
                      </Typography>
                      <Typography variant="h6" fontWeight={600} color="primary">
                        124/82 <Typography component="span" variant="body2" color="textSecondary">mmHg</Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Биеийн халуун
                      </Typography>
                      <Typography variant="h6" fontWeight={600} color="primary">
                        36.7 <Typography component="span" variant="body2" color="textSecondary">°C</Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Хүчилтөрөгчийн хангамж
                      </Typography>
                      <Typography variant="h6" fontWeight={600} color="primary">
                        98 <Typography component="span" variant="body2" color="textSecondary">%</Typography>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="text"
                    color="primary"
                  >
                    Дэлгэрэнгүй харах
                  </Button>
                </Box>
              </CardContent>
            </Card>
            
            <Card variant="outlined">
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Эмийн хэрэглээ
                </Typography>
                
                <List disablePadding>
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <IconPill size={20} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Парацетамол 500мг" 
                      secondary="8 цаг тутамд 1 шахмал, 5 хоног"
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      secondaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                    />
                    <Chip 
                      label="Идэвхтэй" 
                      color="success" 
                      size="small"
                    />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <IconPill size={20} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Амоксициллин 500мг" 
                      secondary="8 цаг тутамд 1 капсул, 7 хоног"
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                      secondaryTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
                    />
                    <Chip 
                      label="Идэвхтэй" 
                      color="success" 
                      size="small"
                    />
                  </ListItem>
                </List>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="text"
                    color="primary"
                  >
                    Дэлгэрэнгүй харах
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      
      {/* Insurance Tab */}
      {tabValue === 2 && (
        <Card variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                Даатгалын мэдээлэл
              </Typography>
              <Chip 
                label="Идэвхтэй" 
                color="success" 
                size="small"
                icon={<IconCheck size={14} />}
              />
            </Box>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Даатгалын дугаар
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {patientData.insuranceNumber}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Даатгалын байгууллага
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {patientData.insuranceProvider}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Дуусах хугацаа
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {new Date(patientData.insuranceExpiry).toLocaleDateString('mn-MN')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Хамруулах хувь
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    80%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            <Box>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Даатгалын баримт бичиг
              </Typography>
              
              <Box sx={{ border: '1px dashed', borderColor: 'divider', borderRadius: 1, p: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Даатгалын карт эсвэл бусад баримт бичгийг энд байршуулна
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<IconFileUpload />}
                  sx={{ mt: 1 }}
                >
                  Файл оруулах
                </Button>
              </Box>
              
              <Alert severity="info" sx={{ mt: 3 }}>
                Даатгалын мэдээллийг шинэчлэхийн тулд эмнэлгийн ажилтантай холбогдоно уу.
              </Alert>
            </Box>
          </CardContent>
        </Card>
      )}
      
      {/* Notifications Tab */}
      {tabValue === 3 && (
        <Card variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Мэдэгдлийн тохиргоо
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" gutterBottom>
                Доорх тохиргоогоор таны мэдэгдэл хүлээн авах хэлбэрийг тохируулна уу.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <FormControlLabel 
                  control={<Switch checked={true} />}
                  label="Апп" 
                  labelPlacement="end"
                />
                <FormControlLabel 
                  control={<Switch checked={true} />}
                  label="SMS" 
                  labelPlacement="end"
                />
                <FormControlLabel 
                  control={<Switch checked={false} />}
                  label="И-мэйл" 
                  labelPlacement="end"
                />
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Мэдэгдлийн төрлүүд
            </Typography>
            
            <List>
              {notificationPrefs.map((pref) => (
                <ListItem
                  key={pref.id}
                  secondaryAction={
                    <Switch
                      edge="end"
                      checked={pref.enabled}
                      onChange={(e) => handleNotificationChange(pref.id, e.target.checked)}
                    />
                  }
                  divider
                >
                  <ListItemIcon>
                    {getNotificationIcon(pref.type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={pref.title}
                    secondary={pref.description}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
              >
                Хадгалах
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
      
      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {getFieldLabel(editField)} засах
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            label={getFieldLabel(editField)}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            variant="outlined"
            multiline={editField === 'address' || editField === 'emergencyContact'}
            rows={editField === 'address' || editField === 'emergencyContact' ? 3 : 1}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Цуцлах</Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
              // Here you would update the data
              console.log(`Updated ${editField} to ${editValue}`);
              setEditDialogOpen(false);
            }}
          >
            Хадгалах
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardCard>
  );
};

export default ProfileInfo;