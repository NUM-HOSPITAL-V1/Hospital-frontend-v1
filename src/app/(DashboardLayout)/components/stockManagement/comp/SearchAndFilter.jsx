import React from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchAndFilter = ({ searchQuery, setSearchQuery, onOpenFilterDialog }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        placeholder="Нэр, ID эсвэл серийн дугаараар хайх"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flexGrow: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
        size="small"
      />
      
      <Button 
        variant="outlined" 
        startIcon={<FilterListIcon />}
        onClick={onOpenFilterDialog}
        sx={{ minWidth: 120 }}
      >
        Шүүлтүүр
      </Button>
    </Box>
  );
};

export default SearchAndFilter;