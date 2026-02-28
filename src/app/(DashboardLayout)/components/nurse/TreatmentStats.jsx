import { Box, Typography, Grid, Paper, Avatar, LinearProgress, Divider } from '@mui/material';
import {
  IconStethoscope,
  IconPill,
  IconHeartbeat,
  IconCalendarEvent,
  IconTrophy,
  IconArchive
} from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Treatment statistics data
const stats = [
  {
    title: 'Нийт эмчилгээ',
    value: 62,
    icon: <IconStethoscope size={20} />,
    iconBg: 'primary.light',
    iconColor: 'primary.main',
    change: '+12%',
    isPositive: true
  },
  {
    title: 'Эмийн хэрэглээ',
    value: 157,
    unit: 'нэгж',
    icon: <IconPill size={20} />,
    iconBg: 'info.light',
    iconColor: 'info.main',
    change: '+8%',
    isPositive: true
  },
  {
    title: 'Амин үзүүлэлт',
    value: 84,
    icon: <IconHeartbeat size={20} />,
    iconBg: 'error.light',
    iconColor: 'error.main',
    change: '+15%',
    isPositive: true
  },
  {
    title: 'Төлөвлөсөн',
    value: 28,
    icon: <IconCalendarEvent size={20} />,
    iconBg: 'warning.light',
    iconColor: 'warning.main',
    change: '-3%',
    isPositive: false
  }
];

// Treatment completion data
const treatmentProgress = [
  {
    title: 'Хийгдсэн эмчилгээ',
    value: 42,
    percentage: 68,
    color: 'success.main'
  },
  {
    title: 'Хийгдэж буй эмчилгээ',
    value: 12,
    percentage: 19,
    color: 'warning.main'
  },
  {
    title: 'Хойшилсон эмчилгээ',
    value: 8,
    percentage: 13,
    color: 'error.main'
  }
];

const TreatmentStats = () => {
  return (
    <DashboardCard title="Эмчилгээний статистик">
      <Grid container spacing={2}>
        {/* Treatment counts */}
        {stats.map((stat, index) => (
          <Grid item xs={6} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: stat.iconBg,
                  color: stat.iconColor,
                  mr: 1.5
                }}
              >
                {stat.icon}
              </Avatar>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  {stat.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mr: 0.5 }}>
                    {stat.value}
                  </Typography>
                  {stat.unit && (
                    <Typography variant="body2" color="textSecondary">
                      {stat.unit}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />
      
      {/* Treatment progress */}
      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
        Эмчилгээний гүйцэтгэл
      </Typography>
      
      <Box sx={{ mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'success.light',
              color: 'success.main',
              mr: 1,
              fontSize: 15
            }}
          >
            <IconTrophy size={16} />
          </Avatar>
          <Typography variant="body2" fontWeight={500}>
            Өнөөдрийн гүйцэтгэл: 12/15 эмчилгээ (80%)
          </Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={80} 
          color="success"
          sx={{ height: 6, borderRadius: 5, mb: 2 }} 
        />
      </Box>
      
      {treatmentProgress.map((item, index) => (
        <Box key={index} sx={{ mb: 1.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" color="textSecondary">
              {item.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant="body2" fontWeight={600} sx={{ mr: 0.5 }}>
                {item.value}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                ({item.percentage}%)
              </Typography>
            </Box>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={item.percentage} 
            sx={{ 
              height: 6, 
              borderRadius: 5,
              bgcolor: 'background.default',
              '& .MuiLinearProgress-bar': {
                bgcolor: item.color,
              }
            }} 
          />
        </Box>
      ))}
      
      <Divider sx={{ my: 2 }} />
      
      {/* Monthly statistics */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'secondary.light',
            color: 'secondary.main',
            mr: 1.5
          }}
        >
          <IconArchive size={20} />
        </Avatar>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Сарын гүйцэтгэл
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" fontWeight={600} sx={{ mr: 0.5 }}>
              87%
            </Typography>
            <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600 }}>
              (+5% өмнөх сараас)
            </Typography>
          </Box>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default TreatmentStats;