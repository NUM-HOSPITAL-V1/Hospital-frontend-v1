import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const StockHeader = ({ onAddItem, onBack }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton 
          onClick={onBack}
          sx={{ 
            color: 'primary.main',
            bgcolor: 'rgba(25, 118, 210, 0.08)',
            mr: 1,
            '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.12)' }
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="600">Эмийн сан - Агуулахын удирдлага</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAddItem}
          sx={{ 
            borderRadius: '8px', 
            textTransform: 'none',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          Шинэ бараа
        </Button>
      </Box>
    </Box>
  );
};

export default StockHeader;