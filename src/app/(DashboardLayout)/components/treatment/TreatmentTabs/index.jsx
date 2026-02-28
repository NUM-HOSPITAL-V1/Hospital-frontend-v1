import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import MedicationIcon from '@mui/icons-material/Medication';
import HealingIcon from '@mui/icons-material/Healing';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MedicationsTab from './MedicationsTab';
import TreatmentsTab from './TreatmentsTab';
import InstructionsTab from './InstuctionsTab';


const TreatmentTabs = ({ 
  treatment, 
  tabValue, 
  onTabChange,
  onAdministerMedication,
  onAdministerTreatment
}) => {
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={onTabChange}
        variant="fullWidth"
        sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab
          label="Эм"
          icon={<MedicationIcon />}
          iconPosition="start"
          sx={{ textTransform: 'none' }}
        />
        <Tab
          label="Эмчилгээ"
          icon={<HealingIcon />}
          iconPosition="start"
          sx={{ textTransform: 'none' }}
        />
        <Tab
          label="Заавар"
          icon={<EventNoteIcon />}
          iconPosition="start"
          sx={{ textTransform: 'none' }}
        />
      </Tabs>

      <Box sx={{ minHeight: 300 }}>
        {tabValue === 0 && (
          <MedicationsTab 
            medications={treatment.prescribedMedications} 
            onAdministerMedication={onAdministerMedication} 
          />
        )}
        
        {tabValue === 1 && (
          <TreatmentsTab 
            treatments={treatment.prescribedTreatments} 
            onAdministerTreatment={onAdministerTreatment} 
          />
        )}
        
        {tabValue === 2 && (
          <InstructionsTab
           instructions={treatment.instructions} />
        )}
      </Box>
    </>
  );
};

export default TreatmentTabs;