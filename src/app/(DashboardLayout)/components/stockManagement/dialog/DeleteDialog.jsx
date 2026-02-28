import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, Typography, CircularProgress 
} from '@mui/material';

const DeleteConfirmationDialog = ({ open, onClose, selectedItem, loading, onDelete }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2 } }}
    >
      <DialogTitle>Бараа устгах</DialogTitle>
      <DialogContent>
        <Typography>
          "{selectedItem?.name}" барааг устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцаах боломжгүй.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={onClose} 
          color="inherit"
        >
          Цуцлах
        </Button>
        <Button 
          onClick={onDelete} 
          variant="contained"
          color="error"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ mr: 1 }} />
          ) : null}
          Устгах
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;