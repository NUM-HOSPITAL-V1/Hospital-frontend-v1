import React from 'react';
import { Box, Typography } from '@mui/material';

const InstructionsTab = ({ instructions }) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 2 }}>
        Эмчилгээний заавар
      </Typography>
      {instructions ? (
        <Typography variant="body1">{instructions}</Typography>
      ) : (
        <Typography color="text.secondary">Заавар байхгүй байна</Typography>
      )}
    </Box>
  );
};

export default InstructionsTab;