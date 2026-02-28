import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Typography, Chip, Box } from '@mui/material';

const RecentAppointments = () => {
  return (
    <DashboardCard title="Сүүлийн үзлэгүүд">
      <Timeline
        className="theme-timeline"
        sx={{
          p: 0,
          '& .MuiTimelineConnector-root': {
            width: '1px',
            backgroundColor: '#efefef',
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
            paddingLeft: 0,
          },
          '& .MuiTimelineItem-root': {
            minHeight: 'auto',
            '&:before': {
              display: 'none',
            }
          },
          '& .MuiTimelineContent-root': {
            padding: '0px 16px 8px',
          },
          '& .MuiTimelineOppositeContent-root': {
            padding: '0px 16px 8px',
          }
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent>09:30</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography fontWeight="600">Батсайхан Дорж</Typography>
              <Chip label="АТС" size="small" color="primary" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">Даралт шалгуулах - Д.Баярмаа</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>10:15</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography fontWeight="600">Саранчимэг Бат</Typography>
              <Chip label="БС" size="small" color="secondary" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">Зөвлөгөө - Н.Анхбаяр</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>11:00</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography fontWeight="600">Ганбат Хүрэлбаатар</Typography>
              <Chip label="ШУС" size="small" color="success" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">Вакцинжуулалт - М.Түвшинжаргал</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>11:45</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography fontWeight="600">Зоригоо Баясгалан</Typography>
              <Chip label="ХЗС" size="small" color="warning" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">Шүд эмчлүүлэх - А.Ганболд</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>13:30</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography fontWeight="600">Оюунчимэг Болд</Typography>
              <Chip label="МТЭС" size="small" color="error" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">Шинжилгээний хариу - Б.Энх-Амгалан</Typography>
          </TimelineContent>
        </TimelineItem>

        
      </Timeline>
    </DashboardCard>
  );
};

export default RecentAppointments;