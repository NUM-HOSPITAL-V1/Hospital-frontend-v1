import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DatePicker } from '@mui/x-date-pickers';

const PageHeader = ({ 
  title, 
  onBack, 
  dateFilter, 
  onDateFilterChange, 
  onOpenFilterDialog 
}) => {
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
        <Typography variant="h5" fontWeight="600">
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DatePicker
          label="Өдөр"
          value={dateFilter}
          onChange={onDateFilterChange}
          slotProps={{ textField: { size: 'small', sx: { width: 150 } } }}
          format="yyyy-MM-dd"
        />
        <Button 
          variant="outlined" 
          startIcon={<FilterListIcon />} 
          onClick={onOpenFilterDialog} 
          size="small"
        >
          Шүүлтүүр
        </Button>
      </Box>
    </Box>
  );
};

export default PageHeader;