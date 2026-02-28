// Mock data for treatments
export const mockTreatments = [
    {
      id: 'TRT-001',
      patientId: 'ТАВ82520019',
      patientName: 'Батболд Дэлгэрцэцэг',
      doctorName: 'Jean Doe',
      diagnosis: 'Ханиад (J00)',
      status: 'Хүлээгдэж буй',
      createdAt: '2025-04-15',
      scheduledDate: '2025-04-16',
      scheduledTime: '10:00',
      prescribedMedications: [
        {
          id: 'MED-001',
          name: 'Парацетамол',
          dosage: '500мг',
          frequency: '8 цаг тутамд',
          duration: '7 хоног',
          status: 'Хүлээгдэж буй'
        },
        {
          id: 'MED-002',
          name: 'Витамин C',
          dosage: '1000мг',
          frequency: 'Өдөрт 1 удаа',
          duration: '10 хоног',
          status: 'Хүлээгдэж буй'
        }
      ],
      prescribedTreatments: [
        {
          id: 'PRC-001',
          name: 'Дуслын эмчилгээ',
          details: 'Глюкозын 5%-ийн уусмал 500мл, витамин Б цогцолбор',
          duration: '30 минут',
          frequency: 'Өдөрт 1 удаа',
          days: '3 өдөр',
          status: 'Хүлээгдэж буй'
        }
      ],
      instructions: 'Эмчилгээний явцад тогтмол халуун хэмжиж, 38.5°C-аас дээш үед эмчид мэдэгдэх'
    },
    {
      id: 'TRT-002',
      patientId: 'ТАД12322020',
      patientName: 'Нямжав Наранчимэг',
      doctorName: 'Jean Doe',
      diagnosis: 'Багтраа (J45.9)',
      status: 'Хийгдэж буй',
      createdAt: '2025-04-15',
      scheduledDate: '2025-04-16',
      scheduledTime: '11:30',
      prescribedMedications: [
        {
          id: 'MED-003',
          name: 'Сальбутамол',
          dosage: '2 шүршилт',
          frequency: '4-6 цаг тутамд шаардлагатай үед',
          duration: '7 хоног',
          status: 'Хийгдэж буй'
        }
      ],
      prescribedTreatments: [
        {
          id: 'PRC-002',
          name: 'Хүчилтөрөгчийн эмчилгээ',
          details: '2-3 л/мин хурдтайгаар хамрын гуурсаар',
          duration: '15 минут',
          frequency: 'Шаардлагатай үед',
          days: '1 өдөр',
          status: 'Хийгдэж буй'
        },
        {
          id: 'PRC-003',
          name: 'Небулайзер эмчилгээ',
          details: 'Сальбутамол 2.5мг + Физиологийн уусмал 2мл',
          duration: '10 минут',
          frequency: 'Өдөрт 3 удаа',
          days: '3 өдөр',
          status: 'Хүлээгдэж буй'
        }
      ],
      instructions: 'Өвчтөний амьсгалын тоо, зүрхний цохилт, хүчилтөрөгчийн ханамжийг тогтмол хянах'
    },
    {
      id: 'TRT-003',
      patientId: 'ТАБ23220020',
      patientName: 'Батболд Эрдэнэ',
      doctorName: 'Jean Doe',
      diagnosis: 'Шумуулын хазалт (T63.4)',
      status: 'Дууссан',
      createdAt: '2025-04-14',
      scheduledDate: '2025-04-15',
      scheduledTime: '14:00',
      prescribedMedications: [
        {
          id: 'MED-004',
          name: 'Лоратадин',
          dosage: '10мг',
          frequency: 'Өдөрт 1 удаа',
          duration: '3 өдөр',
          status: 'Дууссан'
        }
      ],
      prescribedTreatments: [
        {
          id: 'PRC-004',
          name: 'Хазсан хэсгийг цэвэрлэх',
          details: 'Усаар угааж, антисептик тавих',
          duration: '10 минут',
          frequency: 'Өдөрт 2 удаа',
          days: '1 өдөр',
          status: 'Дууссан'
        }
      ],
      instructions: 'Хавдсан хэсгийг ажиглаж, улаан судал үүсвэл эмчид яаралтай мэдүүлэх'
    }
  ];
  
  // Helper functions
  export const getStatusColor = (status) => {
    switch (status) {
      case 'Хүлээгдэж буй':
        return 'warning';
      case 'Хийгдэж буй':
        return 'info';
      case 'Дууссан':
        return 'success';
      default:
        return 'default';
    }
  };
  
  export const getStatusIcon = (status) => {
    switch (status) {
      case 'Хүлээгдэж буй':
        return 'PendingIcon';
      case 'Хийгдэж буй':
        return 'ScheduleIcon';
      case 'Дууссан':
        return 'CheckCircleIcon';
      default:
        return null;
    }
  };