import React from 'react';
import { Card, CardContent, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      <CardContent sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="Үйлчлүүлэгчийн нэр, ID, онош хайх"
          value={value}
          onChange={onChange}
          size="small"
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SearchBar;