import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

const FilterDialog = ({
  open,
  onClose,
  statusFilter,
  onStatusFilterChange,
  dateFilter,
  onDateFilterChange,
  onApplyFilters
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Шүүлтүүр</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 1 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Төлөв</InputLabel>
            <Select value={statusFilter} onChange={onStatusFilterChange} label="Төлөв">
              <MenuItem value="all">Бүгд</MenuItem>
              <MenuItem value="Хүлээгдэж буй">Хүлээгдэж буй</MenuItem>
              <MenuItem value="Хийгдэж буй">Хийгдэж буй</MenuItem>
              <MenuItem value="Дууссан">Дууссан</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            label="Өдөр"
            value={dateFilter}
            onChange={onDateFilterChange}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: 'normal'
              }
            }}
            format="yyyy-MM-dd"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Цуцлах
        </Button>
        <Button onClick={onApplyFilters} variant="contained">
          Хайх
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;