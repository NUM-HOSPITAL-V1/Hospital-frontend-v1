import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

// Төлөвт суурилсан өнгө
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

const MedicationsTab = ({ medications, onAdministerMedication }) => {
  const [administeredCounts, setAdministeredCounts] = useState({});
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [open, setOpen] = useState(false);
  const [inputAmount, setInputAmount] = useState('');

  const handleAdministerClick = (medication) => {
    setSelectedMedication(medication);
    setInputAmount('');
    setOpen(true);
  };

  const handleConfirmAdminister = () => {
    if (!inputAmount || isNaN(inputAmount) || Number(inputAmount) <= 0) {
      alert('Зөв тоо оруулна уу');
      return;
    }

    const id = selectedMedication.id;
    const count = Number(inputAmount);

    setAdministeredCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + count,
    }));

    if (onAdministerMedication) {
      onAdministerMedication(id, count);
    }

    setOpen(false);
    setSelectedMedication(null);
  };

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        Эмийн зааврууд
      </Typography>

      {medications && medications.length > 0 ? (
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
                <TableCell sx={{ fontWeight: 600 }}>Эмийн нэр</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Тун</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Давтамж (өдөрт)</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Үргэлжлэх хугацаа</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Төлөв</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>Үйлдэл</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medications.map((medication) => (
                <TableRow key={medication.id}>
                  <TableCell>{medication.name}</TableCell>
                  <TableCell>{medication.dosage}</TableCell>
                  <TableCell>{medication.frequency}</TableCell>
                  <TableCell>{medication.duration}</TableCell>
                  <TableCell>
                    <Chip
                      label={medication.status}
                      size="small"
                      color={getStatusColor(medication.status)}
                      sx={{ borderRadius: '4px' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => handleAdministerClick(medication)}
                        disabled={medication.status === 'Дууссан'}
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          minWidth: 100,
                          mb: 0.5,
                        }}
                      >
                        {medication.status === 'Дууссан' ? 'Дууссан' : 'Өгөх'}
                      </Button>
                      {administeredCounts[medication.id] && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          Өгсөн: {administeredCounts[medication.id]} ширхэг
                        </Typography>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography color="text.secondary">Эмийн жагсаалт хоосон байна</Typography>
        </Box>
      )}

      {/* Dialog for input */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Эм өгөх</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>{selectedMedication?.name}</Typography>
          <TextField
            autoFocus
            fullWidth
            label="Өгөх ширхэг"
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
            inputProps={{ min: 1 }}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Болих</Button>
          <Button variant="contained" onClick={handleConfirmAdminister}>
            Батлах
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MedicationsTab;
