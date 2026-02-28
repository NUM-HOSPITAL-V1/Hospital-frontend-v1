import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, Typography, CircularProgress 
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

import ItemForm from '../comp/ItemForm';

const AddItemDialog = ({ 
  open, 
  onClose, 
  loading, 
  itemForm, 
  handleItemFormChange, 
  handleExpiryDateChange, 
  onAdd 
}) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle>Шинэ бараа бүртгэх</DialogTitle>
      <DialogContent sx={{ pt: 0, pb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Агуулахад шинэ бараа бүртгэх
        </Typography>
      </DialogContent>
      <DialogContent dividers>
        <ItemForm
          itemForm={itemForm} 
          handleItemFormChange={handleItemFormChange} 
          handleExpiryDateChange={handleExpiryDateChange} 
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={onClose} 
          color="inherit"
          startIcon={<CloseIcon />}
        >
          Цуцлах
        </Button>
        <Button 
          onClick={onAdd} 
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ mr: 1 }} />
          ) : null}
          Хадгалах
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemDialog;