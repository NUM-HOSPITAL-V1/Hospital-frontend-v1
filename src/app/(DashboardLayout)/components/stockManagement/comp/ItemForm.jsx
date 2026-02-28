import React from 'react';
import { 
  Grid, TextField, FormControl, InputLabel, Select, 
  MenuItem, Box, InputAdornment, Typography 
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { categoryOptions, subCategoryOptions, formOptions, statusOptions } from '../constants';

const ItemForm = ({ itemForm, handleItemFormChange, handleExpiryDateChange }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 0.5 }}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="ID"
          name="id"
          value={itemForm.id}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          disabled
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          label="Барааны нэр"
          name="name"
          value={itemForm.name}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          required
        />
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Ангилал</InputLabel>
          <Select
            name="category"
            value={itemForm.category}
            onChange={handleItemFormChange}
            label="Ангилал"
            required
          >
            {categoryOptions.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Дэд ангилал</InputLabel>
          <Select
            name="subCategory"
            value={itemForm.subCategory}
            onChange={handleItemFormChange}
            label="Дэд ангилал"
          >
            {(subCategoryOptions[itemForm.category] || []).map((subCategory) => (
              <MenuItem key={subCategory} value={subCategory}>{subCategory}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Эмийн хэлбэр</InputLabel>
          <Select
            name="form"
            value={itemForm.form}
            onChange={handleItemFormChange}
            label="Эмийн хэлбэр"
          >
            {(formOptions[itemForm.category] || []).map((form) => (
              <MenuItem key={form} value={form}>{form}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <TextField
          label="Тун"
          name="dosage"
          value={itemForm.dosage}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          disabled={itemForm.category !== 'Эм'}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Үйлдвэрлэгч"
          name="manufacturer"
          value={itemForm.manufacturer}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Нийлүүлэгч"
          name="supplier"
          value={itemForm.supplier}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <TextField
          label="Цувралын дугаар"
          name="batchNumber"
          value={itemForm.batchNumber}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Хугацаа дуусах огноо"
            value={itemForm.expiryDate}
            onChange={handleExpiryDateChange}
            slotProps={{ 
              textField: { 
                fullWidth: true,
                margin: "normal"
              } 
            }}
            format="yyyy-MM-dd"
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Байршил"
          name="location"
          value={itemForm.location}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={3}>
        <TextField
          label="Тоо хэмжээ"
          name="quantity"
          type="number"
          value={itemForm.quantity}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          required
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Хэмжих нэгж"
          name="unit"
          value={itemForm.unit}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          required
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Дахин захиалах түвшин"
          name="reorderLevel"
          type="number"
          value={itemForm.reorderLevel}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Нэгж үнэ (₮)"
          name="price"
          type="number"
          value={itemForm.price}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">₮</InputAdornment>,
          }}
        />
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Төлөв</InputLabel>
          <Select
            name="status"
            value={itemForm.status}
            onChange={handleItemFormChange}
            label="Төлөв"
          >
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Нийт үнэ цэнэ"
          value={new Intl.NumberFormat('mn-MN', { style: 'currency', currency: 'MNT', maximumFractionDigits: 0 })
            .format(itemForm.price * itemForm.quantity)}
          fullWidth
          margin="normal"
          disabled
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          label="Тайлбар"
          name="description"
          value={itemForm.description}
          onChange={handleItemFormChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />
      </Grid>
    </Grid>
  );
};

export default ItemForm;