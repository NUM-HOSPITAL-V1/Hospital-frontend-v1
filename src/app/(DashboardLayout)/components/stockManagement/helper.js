import { statusOptions } from './constants';

// Get status chip color
export const getStatusColor = (status) => {
  const statusOption = statusOptions.find(option => option.value === status);
  return statusOption ? statusOption.color : 'default';
};

// Get status-based row styling
export const getRowStyle = (item) => {
  if (item.status === 'Дахин захиалах') {
    return { bgcolor: 'rgba(229, 57, 53, 0.05)' };
  }
  if (item.status === 'Дуусаж байгаа') {
    return { bgcolor: 'rgba(255, 152, 0, 0.05)' };
  }
  if (item.status === 'Хугацаа дуусах дөхсөн') {
    return { bgcolor: 'rgba(3, 169, 244, 0.05)' };
  }
  return {};
};

// Check if item is low in stock
export const isLowStock = (item) => {
  return item.quantity <= item.reorderLevel;
};

// Check if item is near expiry
export const isNearExpiry = (item) => {
  const expiryDate = new Date(item.expiryDate);
  const today = new Date();
  const threeMonthsFromNow = new Date();
  threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
  
  return expiryDate <= threeMonthsFromNow && expiryDate >= today;
};