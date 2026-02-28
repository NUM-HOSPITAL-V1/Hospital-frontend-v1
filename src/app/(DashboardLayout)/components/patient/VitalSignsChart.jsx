'use client';
import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  ButtonGroup,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample vital signs data for the last 7 days
const sampleData = [
  {
    date: '04-17',
    temperature: 36.6,
    heartRate: 72,
    bloodPressureSystolic: 122,
    bloodPressureDiastolic: 78,
    respiration: 14,
    oxygenSaturation: 97
  },
  {
    date: '04-18',
    temperature: 36.7,
    heartRate: 75,
    bloodPressureSystolic: 124,
    bloodPressureDiastolic: 80,
    respiration: 15,
    oxygenSaturation: 98
  },
  {
    date: '04-19',
    temperature: 37.2,
    heartRate: 82,
    bloodPressureSystolic: 130,
    bloodPressureDiastolic: 84,
    respiration: 17,
    oxygenSaturation: 96
  },
  {
    date: '04-20',
    temperature: 37.5,
    heartRate: 88,
    bloodPressureSystolic: 135,
    bloodPressureDiastolic: 86,
    respiration: 18,
    oxygenSaturation: 95
  },
  {
    date: '04-21',
    temperature: 37.1,
    heartRate: 80,
    bloodPressureSystolic: 128,
    bloodPressureDiastolic: 82,
    respiration: 16,
    oxygenSaturation: 97
  },
  {
    date: '04-22',
    temperature: 36.8,
    heartRate: 76,
    bloodPressureSystolic: 125,
    bloodPressureDiastolic: 78,
    respiration: 15,
    oxygenSaturation: 98
  },
  {
    date: '04-23',
    temperature: 36.7,
    heartRate: 74,
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 76,
    respiration: 14,
    oxygenSaturation: 99
  }
];

const VitalSignsChart = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('temperature');
  
  // Handle time range change
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };
  
  // Handle metric change
  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };
  
  // Get metric title and unit
  const getMetricInfo = () => {
    switch (selectedMetric) {
      case 'temperature':
        return { title: 'Биеийн халуун', unit: '°C', color: '#FF6384' };
      case 'heartRate':
        return { title: 'Зүрхний цохилт', unit: 'bpm', color: '#FF9F40' };
      case 'bloodPressure':
        return { title: 'Цусны даралт', unit: 'mmHg', color: '#4BC0C0' };
      case 'respiration':
        return { title: 'Амьсгалын давтамж', unit: 'brpm', color: '#36A2EB' };
      case 'oxygenSaturation':
        return { title: 'Хүчилтөрөгчийн хангамж', unit: '%', color: '#9966FF' };
      default:
        return { title: 'Биеийн халуун', unit: '°C', color: '#FF6384' };
    }
  };
  
  // Get chart data based on selected metric
  const getChartData = () => {
    // In a real app, you would filter data based on time range
    // Here we're just using the sample data
    return sampleData;
  };
  
  const metricInfo = getMetricInfo();
  const chartData = getChartData();
  
  const renderChartContent = () => {
    switch (selectedMetric) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value, name) => [value, name === 'bloodPressureSystolic' ? 'Систолик' : 'Диастолик']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="bloodPressureSystolic" 
                stroke="#4BC0C0" 
                activeDot={{ r: 8 }} 
                name="Систолик"
              />
              <Line 
                type="monotone" 
                dataKey="bloodPressureDiastolic" 
                stroke="#36A2EB" 
                activeDot={{ r: 8 }}
                name="Диастолик"
              />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => [value, metricInfo.title]} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke={metricInfo.color} 
                activeDot={{ r: 8 }} 
                name={metricInfo.title}
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };
  
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            Амин үзүүлэлтийн шинжилгээ
          </Typography>
          
          <ButtonGroup size="small" variant="outlined">
            <Button 
              onClick={() => handleTimeRangeChange('week')}
              variant={timeRange === 'week' ? 'contained' : 'outlined'}
            >
              7 хоног
            </Button>
            <Button 
              onClick={() => handleTimeRangeChange('month')}
              variant={timeRange === 'month' ? 'contained' : 'outlined'}
            >
              1 сар
            </Button>
            <Button 
              onClick={() => handleTimeRangeChange('year')}
              variant={timeRange === 'year' ? 'contained' : 'outlined'}
            >
              1 жил
            </Button>
          </ButtonGroup>
        </Box>
        
        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <InputLabel>Үзүүлэлт</InputLabel>
          <Select
            value={selectedMetric}
            onChange={handleMetricChange}
            label="Үзүүлэлт"
          >
            <MenuItem value="temperature">Биеийн халуун (°C)</MenuItem>
            <MenuItem value="heartRate">Зүрхний цохилт (bpm)</MenuItem>
            <MenuItem value="bloodPressure">Цусны даралт (mmHg)</MenuItem>
            <MenuItem value="respiration">Амьсгалын давтамж (brpm)</MenuItem>
            <MenuItem value="oxygenSaturation">Хүчилтөрөгчийн хангамж (%)</MenuItem>
          </Select>
        </FormControl>
        
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="textSecondary">
            {metricInfo.title} - {metricInfo.unit}
          </Typography>
        </Box>
        
        {renderChartContent()}
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" color="textSecondary">
              Сүүлийн хэмжилт
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {selectedMetric === 'bloodPressure' 
                ? `${chartData[chartData.length-1].bloodPressureSystolic}/${chartData[chartData.length-1].bloodPressureDiastolic} ${metricInfo.unit}`
                : `${chartData[chartData.length-1][selectedMetric]} ${metricInfo.unit}`
              }
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" color="textSecondary">
              Дундаж
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {selectedMetric === 'bloodPressure'
                ? `${Math.round(chartData.reduce((sum, item) => sum + item.bloodPressureSystolic, 0) / chartData.length)}/${Math.round(chartData.reduce((sum, item) => sum + item.bloodPressureDiastolic, 0) / chartData.length)} ${metricInfo.unit}`
                : `${(chartData.reduce((sum, item) => sum + item[selectedMetric], 0) / chartData.length).toFixed(1)} ${metricInfo.unit}`
              }
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" color="textSecondary">
              Хамгийн өндөр
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {selectedMetric === 'bloodPressure'
                ? `${Math.max(...chartData.map(item => item.bloodPressureSystolic))}/${Math.max(...chartData.map(item => item.bloodPressureDiastolic))} ${metricInfo.unit}`
                : `${Math.max(...chartData.map(item => item[selectedMetric])).toFixed(1)} ${metricInfo.unit}`
              }
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="caption" color="textSecondary">
              Хамгийн бага
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {selectedMetric === 'bloodPressure'
                ? `${Math.min(...chartData.map(item => item.bloodPressureSystolic))}/${Math.min(...chartData.map(item => item.bloodPressureDiastolic))} ${metricInfo.unit}`
                : `${Math.min(...chartData.map(item => item[selectedMetric])).toFixed(1)} ${metricInfo.unit}`
              }
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VitalSignsChart;