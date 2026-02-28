'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const MakeAppointment = () => {
  return (
    <PageContainer title="MakeAppointment" description="this is MakeAppointment">
      <DashboardCard title="MakeAppointment">
        <Typography>This is a MakeAppointment</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default MakeAppointment;

