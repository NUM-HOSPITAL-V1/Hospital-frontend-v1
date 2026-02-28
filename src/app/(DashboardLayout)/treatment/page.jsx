'use client';

import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { mockTreatments } from '../components/treatment/data';
import SearchBar from '../components/treatment/SearchBar';
import StatusSummary from '../components/treatment/StatusSummary';
import TreatmentTable from '../components/treatment/TreatmentTable';
import FilterDialog from '../components/treatment/FilterDialog';
import TreatmentDetailsDialog from '../components/treatment/TreatmentDetailsDialog';
import AddNoteDialog from '../components/treatment/AddNoteDialog';
import PageHeader from '../components/treatment/PageHeader';



const TreatmentListPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState(new Date());
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  
  // State to track how many times a treatment has been administered
  const [administeredCounts, setAdministeredCounts] = useState({});

  // Filter handlers
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleDateFilterChange = (date) => {
    setDateFilter(date);
  };

  const handleOpenFilterDialog = () => {
    setFilterDialogOpen(true);
  };

  const handleCloseFilterDialog = () => {
    setFilterDialogOpen(false);
  };

  const applyFilters = () => {
    handleCloseFilterDialog();
    console.log('Filters applied:', { statusFilter, dateFilter });
  };

  const filteredTreatments = mockTreatments.filter((treatment) => {
    // Фильтр төлөвөөр
    if (statusFilter !== 'all' && treatment.status !== statusFilter) {
      return false;
    }
    // Хайлт query-аар
    const searchLower = searchQuery.toLowerCase();
    return (
      treatment.patientName.toLowerCase().includes(searchLower) ||
      treatment.patientId.toLowerCase().includes(searchLower) ||
      treatment.diagnosis.toLowerCase().includes(searchLower)
    );
  });

  // Detail dialog functions
  const handleViewDetails = (treatment) => {
    setSelectedTreatment(treatment);
    setDetailsOpen(true);
    setTabValue(0); // Анхнаасаа Эмийн tab
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBack = () => {
    router.push('/dashboard');
  };

  // Эмийн үйлдлийн логик
  const handleAdministerMedication = (medicationId) => {
    if (selectedTreatment) {
      const updatedMedications = selectedTreatment.prescribedMedications.map((med) => {
        if (med.id === medicationId) {
          // materialTaken шинж чанар байгаа эсэхийг шалгана.
          if (!med.materialTaken) {
            // Хэрэв эхлэх үед материал авч аваагүй бол, материалыг авч дууссан байдлаар тэмдэглэнэ.
            return { ...med, status: 'Дууссан', materialTaken: true };
          } else {
            console.log('Энэ эмийн материал аль хэдийн авч дууссан байна.');
            return med;
          }
        }
        return med;
      });
      setSelectedTreatment({
        ...selectedTreatment,
        prescribedMedications: updatedMedications
      });
    }
  };

  // Эмчилгээний үйлдлийн логик: Тухайн эмчилгээ 5 дахь үйлдлээс зөвхөн 3 удаа гүйцэтгэх болзлыг шалгана.
  const handleAdministerTreatment = (treatmentId) => {
    const currentCount = administeredCounts[treatmentId] || 0;
    if (currentCount < 3) {
      const newCount = currentCount + 1;
      const updatedTreatments = selectedTreatment.prescribedTreatments.map((trt) =>
        trt.id === treatmentId
          ? {
              ...trt,
              status: newCount >= 3 ? 'Дууссан' : trt.status,
              administeredCount: newCount
            }
          : trt
      );
      setSelectedTreatment({
        ...selectedTreatment,
        prescribedTreatments: updatedTreatments
      });
      setAdministeredCounts({
        ...administeredCounts,
        [treatmentId]: newCount
      });
      console.log(`Эмчилгээ ${treatmentId}-г ${newCount} удаа гүйцэтгэсэн байна.`);
    } else {
      console.log(`Эмчилгээ ${treatmentId} шаардлагатай тоо (3 удаа) дууссан байна.`);
    }
  };

  // Бүх үйлдлийг дуусгах
  const handleCompleteAll = () => {
    if (selectedTreatment) {
      const updatedMedications = selectedTreatment.prescribedMedications.map((med) => ({
        ...med,
        status: 'Дууссан',
        materialTaken: true
      }));
      const updatedTreatments = selectedTreatment.prescribedTreatments.map((trt) => ({
        ...trt,
        status: 'Дууссан'
      }));
      setSelectedTreatment({
        ...selectedTreatment,
        status: 'Дууссан',
        prescribedMedications: updatedMedications,
        prescribedTreatments: updatedTreatments
      });
    }
  };

  // Тэмдэглэл нэмэх dialog функцүүд
  const handleOpenNoteDialog = () => {
    setNoteDialogOpen(true);
  };

  const handleCloseNoteDialog = () => {
    setNoteDialogOpen(false);
  };

  const handleSaveNote = () => {
    console.log('Note saved:', noteText);
    handleCloseNoteDialog();
    setNoteText('');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'white', p: 3 }}>
        {/* Header */}
        <PageHeader 
          title="Сувилагчийн эмчилгээний хуудас"
          onBack={handleBack}
          dateFilter={dateFilter}
          onDateFilterChange={handleDateFilterChange}
          onOpenFilterDialog={handleOpenFilterDialog}
        />

        {/* Search */}
        <SearchBar 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Status summary */}
        <StatusSummary treatments={mockTreatments} />

        {/* Treatment list */}
        <TreatmentTable 
          treatments={filteredTreatments}
          onViewDetails={handleViewDetails}
        />

        {/* Dialogs */}
        <FilterDialog 
          open={filterDialogOpen}
          onClose={handleCloseFilterDialog}
          statusFilter={statusFilter}
          onStatusFilterChange={handleStatusFilterChange}
          dateFilter={dateFilter}
          onDateFilterChange={handleDateFilterChange}
          onApplyFilters={applyFilters}
        />

        <TreatmentDetailsDialog 
          open={detailsOpen}
          onClose={handleCloseDetails}
          treatment={selectedTreatment}
          tabValue={tabValue}
          onTabChange={handleTabChange}
          onAdministerMedication={handleAdministerMedication}
          onAdministerTreatment={handleAdministerTreatment}
          onCompleteAll={handleCompleteAll}
          onOpenNoteDialog={handleOpenNoteDialog}
        />

        <AddNoteDialog 
          open={noteDialogOpen}
          onClose={handleCloseNoteDialog}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onSave={handleSaveNote}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default TreatmentListPage;