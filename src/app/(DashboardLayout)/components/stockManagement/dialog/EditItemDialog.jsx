import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, Typography, CircularProgress 
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

import ItemForm from '../comp/ItemForm';

// Fixed component: Removed nested h6 inside h2 issue
const EditItemDialog = ({ 
  open, 
  onClose, 
  loading, 
  itemForm, 
  selectedItem, 
  handleItemFormChange, 
  handleExpiryDateChange, 
  onUpdate 
}) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle>
        Бараа засах
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {selectedItem ? selectedItem.name : ''} мэдээллийг шинэчлэх
        </Typography>
      </DialogTitle>
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
          onClick={onUpdate} 
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ mr: 1 }} />
          ) : null}
          Шинэчлэх
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItemDialog;