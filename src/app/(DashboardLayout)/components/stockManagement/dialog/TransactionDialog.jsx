import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  FormControl, InputLabel, Select, MenuItem, Button, TextField 
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const StockTransactionDialog = ({ open, onClose, onSave, initialData = {} }) => {
  const [formData, setFormData] = useState({
    type: 'in', // 'in' for stock in, 'out' for stock out
    itemId: '',
    quantity: 0,
    reason: '',
    notes: '',
    date: new Date(),
    ...initialData
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };
  
  const handleSubmit = () => {
    onSave(formData);
  };
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle>
        {formData.type === 'in' ? 'Бараа орлогодох' : 'Бараа зарлагадах'}
      </DialogTitle>
      <DialogContent dividers>
        <FormControl fullWidth margin="normal">
          <InputLabel>Төрөл</InputLabel>
          <Select
            name="type"
            value={formData.type}
            onChange={handleChange}
            label="Төрөл"
          >
            <MenuItem value="in">Орлого</MenuItem>
            <MenuItem value="out">Зарлага</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Бараа</InputLabel>
          <Select
            name="itemId"
            value={formData.itemId}
            onChange={handleChange}
            label="Бараа"
            required
          >
            {/* In a real app, you would populate this from your stock items */}
            <MenuItem value="MED-001">Парацетамол (500мг)</MenuItem>
            <MenuItem value="MED-002">Амоксициллин (250мг)</MenuItem>
            <MenuItem value="MED-003">Ибупрофен (400мг)</MenuItem>
          </Select>
        </FormControl>
        
        <TextField
          label="Тоо хэмжээ"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Шалтгаан</InputLabel>
          <Select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            label="Шалтгаан"
          >
            {formData.type === 'in' ? (
              <>
                <MenuItem value="purchase">Шинээр худалдан авсан</MenuItem>
                <MenuItem value="return">Буцаалт</MenuItem>
                <MenuItem value="adjustment">Тооллогын залруулга</MenuItem>
              </>
            ) : (
              <>
                <MenuItem value="sale">Борлуулалт</MenuItem>
                <MenuItem value="expired">Хугацаа дууссан</MenuItem>
                <MenuItem value="damaged">Гэмтэл/Эвдрэл</MenuItem>
                <MenuItem value="adjustment">Тооллогын залруулга</MenuItem>
              </>
            )}
          </Select>
        </FormControl>
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Огноо"
            value={formData.date}
            onChange={handleDateChange}
            slotProps={{ 
              textField: { 
                fullWidth: true,
                margin: "normal"
              } 
            }}
            format="yyyy-MM-dd"
          />
        </LocalizationProvider>
        
        <TextField
          label="Тэмдэглэл"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Цуцлах
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Хадгалах
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StockTransactionDialog;