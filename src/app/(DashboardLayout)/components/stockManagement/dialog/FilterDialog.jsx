import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  FormControl, InputLabel, Select, MenuItem, Button, Box 
} from '@mui/material';

import { categoryOptions, statusOptions } from '../constants';

const FilterDialog = ({ 
  open, 
  onClose, 
  categoryFilter, 
  setCategoryFilter, 
  statusFilter, 
  setStatusFilter, 
  onApply 
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Шүүлтүүр</DialogTitle>
      <DialogContent dividers>
        <FormControl fullWidth margin="normal">
          <InputLabel>Төрөл</InputLabel>
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            label="Төрөл"
          >
            <MenuItem value="all">Бүгд</MenuItem>
            {categoryOptions.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Төлөв</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Төлөв"
          >
            <MenuItem value="all">Бүгд</MenuItem>
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      width: 10, 
                      height: 10, 
                      borderRadius: '50%', 
                      bgcolor: `${option.color}.main`,
                      mr: 1
                    }} 
                  />
                  {option.value}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Цуцлах
        </Button>
        <Button onClick={onApply} variant="contained">
          Хайх
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;