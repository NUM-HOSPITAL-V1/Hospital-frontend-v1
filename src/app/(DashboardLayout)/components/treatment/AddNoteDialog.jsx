import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';

const AddNoteDialog = ({ open, onClose, value, onChange, onSave }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Тэмдэглэл нэмэх</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          multiline
          minRows={3}
          placeholder="Энд тэмдэглэл бичнэ үү..."
          value={value}
          onChange={onChange}
          sx={{ mt: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Цуцлах
        </Button>
        <Button onClick={onSave} variant="contained">
          Хадгалах
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNoteDialog;