import {
  Typography, Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Үзлэг хийлгэсэн үйлчлүүлэгчдийн мэдээлэл
const patients = [
  {
    id: "P-101",
    name: "Баяр Бат",
    age: 34,
    department: "Дотрын эмчилгээ",
    status: "Хийж дууссан",
    statusColor: "success.main",
  },
  {
    id: "P-102",
    name: "Ганбат Батхүү",
    age: 28,
    department: "Эх барих",
    status: "Хийж байна",
    statusColor: "warning.main",
  },
  {
    id: "P-103",
    name: "Номин Баяр",
    age: 45,
    department: "Мэс засал",
    status: "Хүлээгдэж байна",
    statusColor: "error.main",
  },
  {
    id: "P-103",
    name: "Номин Баяр",
    age: 53,
    department: "Хүүхдийн тасаг",
    status: "Хийж дууссан",
    statusColor: "success.main",
  },
  {
    id: "P-101",
    name: "Баяр Бат",
    age: 60,
    department: "Зүрх судас",
    status: "Хийж байна",
    statusColor: "warning.main",
  },
];

const PatientTreatmentProgress = () => {
  return (
    <DashboardCard title="Эмчилгээний явц">
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label="patient treatment progress table"
          sx={{ whiteSpace: "nowrap", mt: 2 }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Нэр
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Тасаг
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Төлөв
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} hover>
                <TableCell>
                  <Typography fontSize={15} fontWeight={500}>
                    {patient.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        mr: 2,
                        width: 40,
                        height: 40,
                        bgcolor: 'secondary.light',
                      }}
                    >
                      {patient.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {patient.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize={13}>
                        Нас: {patient.age}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="subtitle2">
                    {patient.department}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "6px",
                      backgroundColor: patient.statusColor,
                      color: "#fff",
                    }}
                    size="small"
                    label={patient.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default PatientTreatmentProgress;
