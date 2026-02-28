'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const Settings = () => {
  return (
    <PageContainer title="Settings" description="this is Settings">
      <DashboardCard title="Settings">
        <Typography>This is a Settings</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Settings;

