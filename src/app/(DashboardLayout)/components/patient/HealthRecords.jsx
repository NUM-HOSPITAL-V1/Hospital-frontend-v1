import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Grid,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  IconClipboardList,
  IconFlask,
  IconHeartbeat,
  IconVaccine,
  IconCalendarEvent,
  IconFileText,
  IconDownload,
  IconPrinter,
  IconEye,
  IconSearch,
  IconChevronDown,
  IconFileDescription,
  IconPhotoScan,
  IconReportMedical
} from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Diagnosis history
const diagnosisHistory = [
  {
    id: 'DIAG001',
    date: '2024-04-15',
    diagnosis: 'Дээд амьсгалын замын цочмог халдвар',
    diagnosisCode: 'J06.9',
    doctor: 'Д.Баярмаа',
    department: 'Дотрын тасаг',
    status: 'active'
  },
  {
    id: 'DIAG002',
    date: '2024-03-10',
    diagnosis: 'Харшлын гаралтай ринит',
    diagnosisCode: 'J30.4',
    doctor: 'Н.Анхбаяр',
    department: 'Чих хамар хоолойн тасаг',
    status: 'resolved'
  },
  {
    id: 'DIAG003',
    date: '2023-12-05',
    diagnosis: 'Ходоодны үрэвсэл (гастрит)',
    diagnosisCode: 'K29.7',
    doctor: 'Д.Баярмаа',
    department: 'Дотрын тасаг',
    status: 'resolved'
  }
];

// Laboratory tests
const labTests = [
  {
    id: 'LAB001',
    date: '2024-04-16',
    name: 'Цусны дэлгэрэнгүй шинжилгээ',
    doctor: 'Д.Баярмаа',
    status: 'completed',
    result: 'Хэвийн',
    hasFile: true
  },
  {
    id: 'LAB002',
    date: '2024-04-16',
    name: 'Шээсний ерөнхий шинжилгээ',
    doctor: 'Д.Баярмаа',
    status: 'completed',
    result: 'Хэвийн',
    hasFile: true
  },
  {
    id: 'LAB003',
    date: '2024-03-11',
    name: 'Элэгний үйл ажиллагааны шинжилгээ',
    doctor: 'Н.Анхбаяр',
    status: 'completed',
    result: 'Хэвийн',
    hasFile: true
  },
  {
    id: 'LAB004',
    date: '2024-04-18',
    name: 'Холестерины шинжилгээ',
    doctor: 'Д.Баярмаа',
    status: 'pending',
    result: '',
    hasFile: false
  }
];

// Imaging studies
const imagingStudies = [
  {
    id: 'IMG001',
    date: '2024-04-17',
    name: 'Цээжний рентген',
    doctor: 'Б.Энх-Амгалан',
    status: 'completed',
    result: 'Хэвийн',
    hasFile: true
  },
  {
    id: 'IMG002',
    date: '2023-12-06',
    name: 'Хэвлийн эхо',
    doctor: 'Д.Баярмаа',
    status: 'completed',
    result: 'Ходоодны үрэвсэлтэй',
    hasFile: true
  }
];

// Prescriptions
const prescriptions = [
  {
    id: 'PRES001',
    date: '2024-04-15',
    medication: 'Парацетамол 500мг',
    dosage: '8 цаг тутамд 1 шахмал, 5 хоног',
    doctor: 'Д.Баярмаа',
    status: 'active',
    endDate: '2024-04-20'
  },
  {
    id: 'PRES002',
    date: '2024-04-15',
    medication: 'Амоксициллин 500мг',
    dosage: '8 цаг тутамд 1 капсул, 7 хоног',
    doctor: 'Д.Баярмаа',
    status: 'active',
    endDate: '2024-04-22'
  },
  {
    id: 'PRES003',
    date: '2024-03-10',
    medication: 'Фексофенадин 180мг',
    dosage: 'Өдөрт 1 удаа 1 шахмал, 14 хоног',
    doctor: 'Н.Анхбаяр',
    status: 'completed',
    endDate: '2024-03-24'
  }
];

// Vaccinations
const vaccinations = [
  {
    id: 'VAC001',
    date: '2023-10-12',
    name: 'Томуугийн вакцин',
    doctor: 'М.Түвшинжаргал',
    status: 'completed',
    nextDose: null
  },
  {
    id: 'VAC002',
    date: '2023-12-20',
    name: 'Ковид-19 вакцин (3-р тун)',
    doctor: 'Д.Баярмаа',
    status: 'completed',
    nextDose: null
  }
];

// Doctor notes
const doctorNotes = [
  {
    id: 'NOTE001',
    date: '2024-04-15',
    title: 'Анхны үзлэг',
    doctor: 'Д.Баярмаа',
    content: 'Үйлчлүүлэгч ханиалгах, хамраас нус гоожих, хоолой өвдөх, халуурах зэрэг шинж тэмдэгтэй ирсэн. Биеийн халуун 37.8°C, цусны даралт 125/82 mmHg, зүрхний цохилт 85 bpm. Эмчилгээнд парацетамол 500мг, амоксициллин 500мг бичив. 5 хоногийн дараа давтан үзлэгт ирэхийг зөвлөв.'
  },
  {
    id: 'NOTE002',
    date: '2024-03-10',
    title: 'Харшлын үзлэг',
    doctor: 'Н.Анхбаяр',
    content: 'Үйлчлүүлэгч хамраас нус гоожих, найтаах, хамар битүүрэх зэрэг шинж тэмдэгтэй ирсэн. Харшлын шинжилгээний дүнгээс харахад тоос, мод, өвсний тоосонд харшилтай байна. Эмчилгээнд фексофенадин 180мг бичив. Харшил ихсэх хугацаанд гадуур явахдаа маск зүүхийг зөвлөв.'
  }
];

const HealthRecords = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [recordType, setRecordType] = useState('');
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  // Handle opening details dialog
  const handleOpenDetails = (record, type) => {
    setSelectedRecord(record);
    setRecordType(type);
    setOpenDetailsDialog(true);
  };
  
  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'error';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'success';
      case 'resolved':
        return 'success';
      default:
        return 'default';
    }
  };
  
  // Get status label
  const getStatusLabel = (status) => {
    switch (status) {
      case 'active':
        return 'Идэвхтэй';
      case 'pending':
        return 'Хүлээгдэж буй';
      case 'completed':
        return 'Дууссан';
      case 'resolved':
        return 'Эдгэрсэн';
      default:
        return status;
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('mn-MN', options);
  };
  
  return (
    <DashboardCard
      title="Эмнэлгийн карт"
      action={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<IconPrinter size={18} />}
          >
            Хэвлэх
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<IconDownload size={18} />}
          >
            Татах
          </Button>
        </Box>
      }
    >
      <Box sx={{ mb: 3 }}>
        <TextField
          placeholder="Хайх..."
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch size={20} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
      
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab 
            icon={<IconClipboardList size={18} />} 
            label="Оношууд" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconFlask size={18} />} 
            label="Шинжилгээнүүд" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconPhotoScan size={18} />} 
            label="Зураглал" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconFileText size={18} />} 
            label="Жорууд" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconVaccine size={18} />} 
            label="Вакцинууд" 
            iconPosition="start" 
          />
          <Tab 
            icon={<IconReportMedical size={18} />} 
            label="Тэмдэглэлүүд" 
            iconPosition="start" 
          />
        </Tabs>
      </Box>

      {/* Diagnoses Tab */}
      {tabValue === 0 && (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Огноо</TableCell>
                <TableCell>Онош</TableCell>
                <TableCell>Код</TableCell>
                <TableCell>Эмч</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {diagnosisHistory.map((diagnosis) => (
                <TableRow key={diagnosis.id} hover>
                  <TableCell>{formatDate(diagnosis.date)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {diagnosis.diagnosis}
                    </Typography>
                  </TableCell>
                  <TableCell>{diagnosis.diagnosisCode}</TableCell>
                  <TableCell>{diagnosis.doctor}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(diagnosis.status)}
                      size="small"
                      color={getStatusColor(diagnosis.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton 
                      size="small"
                      onClick={() => handleOpenDetails(diagnosis, 'diagnosis')}
                    >
                      <IconEye size={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Lab Tests Tab */}
      {tabValue === 1 && (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Огноо</TableCell>
                <TableCell>Шинжилгээ</TableCell>
                <TableCell>Захиалсан эмч</TableCell>
                <TableCell>Үр дүн</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labTests.map((test) => (
                <TableRow key={test.id} hover>
                  <TableCell>{formatDate(test.date)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {test.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{test.doctor}</TableCell>
                  <TableCell>{test.result || '-'}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(test.status)}
                      size="small"
                      color={getStatusColor(test.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleOpenDetails(test, 'lab')}
                      >
                        <IconEye size={18} />
                      </IconButton>
                      {test.hasFile && (
                        <IconButton size="small">
                          <IconDownload size={18} />
                        </IconButton>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Imaging Tab */}
      {tabValue === 2 && (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Огноо</TableCell>
                <TableCell>Зураглал</TableCell>
                <TableCell>Захиалсан эмч</TableCell>
                <TableCell>Үр дүн</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {imagingStudies.map((study) => (
                <TableRow key={study.id} hover>
                  <TableCell>{formatDate(study.date)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {study.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{study.doctor}</TableCell>
                  <TableCell>{study.result || '-'}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(study.status)}
                      size="small"
                      color={getStatusColor(study.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleOpenDetails(study, 'imaging')}
                      >
                        <IconEye size={18} />
                      </IconButton>
                      {study.hasFile && (
                        <IconButton size="small">
                          <IconDownload size={18} />
                        </IconButton>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Prescriptions Tab */}
      {tabValue === 3 && (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Огноо</TableCell>
                <TableCell>Эмийн нэр</TableCell>
                <TableCell>Тун</TableCell>
                <TableCell>Бичсэн эмч</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prescriptions.map((prescription) => (
                <TableRow key={prescription.id} hover>
                  <TableCell>{formatDate(prescription.date)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {prescription.medication}
                    </Typography>
                  </TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.doctor}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(prescription.status)}
                      size="small"
                      color={getStatusColor(prescription.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton 
                      size="small"
                      onClick={() => handleOpenDetails(prescription, 'prescription')}
                    >
                      <IconEye size={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Vaccinations Tab */}
      {tabValue === 4 && (
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Огноо</TableCell>
                <TableCell>Вакцин</TableCell>
                <TableCell>Эмч</TableCell>
                <TableCell>Дараагийн тун</TableCell>
                <TableCell>Төлөв</TableCell>
                <TableCell align="center">Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vaccinations.map((vaccination) => (
                <TableRow key={vaccination.id} hover>
                  <TableCell>{formatDate(vaccination.date)}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {vaccination.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{vaccination.doctor}</TableCell>
                  <TableCell>{vaccination.nextDose ? formatDate(vaccination.nextDose) : '-'}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(vaccination.status)}
                      size="small"
                      color={getStatusColor(vaccination.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton 
                      size="small"
                      onClick={() => handleOpenDetails(vaccination, 'vaccination')}
                    >
                      <IconEye size={18} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Doctor Notes Tab */}
      {tabValue === 5 && (
        <Box>
          {doctorNotes.map((note) => (
            <Accordion key={note.id} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<IconChevronDown />}>
                <Grid container alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2" color="textSecondary">
                      {formatDate(note.date)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {note.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2">
                      {note.doctor}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                  {note.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}

      {/* Details Dialog */}
      <Dialog
        open={openDetailsDialog}
        onClose={() => setOpenDetailsDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {recordType === 'diagnosis' && 'Онош дэлгэрэнгүй'}
          {recordType === 'lab' && 'Шинжилгээний дэлгэрэнгүй'}
          {recordType === 'imaging' && 'Зураглалын дэлгэрэнгүй'}
          {recordType === 'prescription' && 'Жорын дэлгэрэнгүй'}
          {recordType === 'vaccination' && 'Вакцины дэлгэрэнгүй'}
        </DialogTitle>
        <DialogContent>
          {selectedRecord && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {/* Common details for all record types */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary">
                    Огноо
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {formatDate(selectedRecord.date)}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="textSecondary">
                    Эмч
                  </Typography>
                  <Typography variant="body1">
                    {selectedRecord.doctor}
                  </Typography>
                </Grid>
                
                {/* Specific details based on record type */}
                {recordType === 'diagnosis' && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        Онош
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {selectedRecord.diagnosis}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary">
                        Оношийн код
                      </Typography>
                      <Typography variant="body1">
                        {selectedRecord.diagnosisCode}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary">
                        Тасаг
                      </Typography>
                      <Typography variant="body1">
                        {selectedRecord.department}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" mr={1}>
                          Төлөв:
                        </Typography>
                        <Chip
                          label={getStatusLabel(selectedRecord.status)}
                          size="small"
                          color={getStatusColor(selectedRecord.status)}
                        />
                      </Box>
                    </Grid>
                  </>
                )}
                
                {recordType === 'lab' && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        Шинжилгээний нэр
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {selectedRecord.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        Үр дүн
                      </Typography>
                      <Typography variant="body1">
                        {selectedRecord.result || 'Хариу гараагүй байна'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" mr={1}>
                          Төлөв:
                        </Typography>
                        <Chip
                          label={getStatusLabel(selectedRecord.status)}
                          size="small"
                          color={getStatusColor(selectedRecord.status)}
                        />
                      </Box>
                    </Grid>
                  </>
                )}
                
                {recordType === 'prescription' && (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        Эмийн нэр
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {selectedRecord.medication}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="textSecondary">
                        Тун
                      </Typography>
                      <Typography variant="body1">
                        {selectedRecord.dosage}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary">
                        Дуусах хугацаа
                      </Typography>
                      <Typography variant="body1">
                        {formatDate(selectedRecord.endDate)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" mr={1}>
                          Төлөв:
                        </Typography>
                        <Chip
                          label={getStatusLabel(selectedRecord.status)}
                          size="small"
                          color={getStatusColor(selectedRecord.status)}
                        />
                      </Box>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDetailsDialog(false)}>Хаах</Button>
          {(recordType === 'lab' || recordType === 'imaging') && selectedRecord?.hasFile && (
            <Button variant="contained" color="primary" startIcon={<IconDownload />}>
              Файл татах
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </DashboardCard>
  );
};

export default HealthRecords;