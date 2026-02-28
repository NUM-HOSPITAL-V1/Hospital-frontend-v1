import React from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  Chip
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ScheduleIcon from '@mui/icons-material/Schedule';

// Helper function for status chips
const getStatusColor = (status) => {
  switch (status) {
    case 'Хүлээгдэж буй':
      return 'warning';
    case 'Хийгдэж буй':
      return 'info';
    case 'Дууссан':
      return 'success';
    default:
      return 'default';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Хүлээгдэж буй':
      return <PendingIcon fontSize="small" />;
    case 'Хийгдэж буй':
      return <ScheduleIcon fontSize="small" />;
    case 'Дууссан':
      return <CheckCircleIcon fontSize="small" />;
    default:
      return null;
  }
};

const TreatmentTable = ({ treatments, onViewDetails }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <TableContainer component={Paper} elevation={0}>
          <Table size="medium">
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
                <TableCell sx={{ fontWeight: 600 }}>Үйлчлүүлэгч</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Онош</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Эмч</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Цаг</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Төлөв</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {treatments.length > 0 ? (
                treatments.map((treatment) => (
                  <TableRow key={treatment.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'primary.light', width: 32, height: 32, mr: 1 }}>
                          <PersonIcon fontSize="small" />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight="500">
                            {treatment.patientName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {treatment.patientId}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{treatment.diagnosis}</TableCell>
                    <TableCell>{treatment.doctorName}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                        <Typography variant="body2">{treatment.scheduledTime}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={treatment.status}
                        size="small"
                        color={getStatusColor(treatment.status)}
                        icon={getStatusIcon(treatment.status)}
                        sx={{ borderRadius: '4px', fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => onViewDetails(treatment)}
                        sx={{ borderRadius: '8px', textTransform: 'none' }}
                      >
                        Дэлгэрэнгүй
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                    <Typography color="text.secondary">Эмчилгээний жагсаалт хоосон байна</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TreatmentTable;