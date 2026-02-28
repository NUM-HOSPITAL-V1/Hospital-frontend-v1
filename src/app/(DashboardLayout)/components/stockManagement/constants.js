// Mock data for stock items
export const mockStockItems = [
    {
      id: 'MED-001',
      name: 'Парацетамол',
      category: 'Эм',
      subCategory: 'Өвдөлт намдаах',
      form: 'Шахмал',
      dosage: '500мг',
      manufacturer: 'Фарма Интернэшнл',
      supplier: 'Монос Фарм',
      batchNumber: 'BT12345',
      expiryDate: '2026-04-16',
      quantity: 1350,
      unit: 'шахмал',
      location: 'Хурдан авалт A-05',
      reorderLevel: 300,
      price: 8.5,
      status: 'Хангалттай',
      lastUpdated: '2025-04-10',
      description: 'Өвдөлт намдаах, халуун бууруулах'
    },
    {
      id: 'MED-002',
      name: 'Амоксициллин',
      category: 'Эм',
      subCategory: 'Антибиотик',
      form: 'Капсул',
      dosage: '250мг',
      manufacturer: 'Байер',
      supplier: 'Гранд Фарма',
      batchNumber: 'BT23456',
      expiryDate: '2025-11-20',
      quantity: 180,
      unit: 'капсул',
      location: 'Антибиотик B-03',
      reorderLevel: 200,
      price: 16.8,
      status: 'Дахин захиалах',
      lastUpdated: '2025-04-05',
      description: 'Өргөн хүрээний антибиотик'
    },
    {
      id: 'MED-003',
      name: 'Ибупрофен',
      category: 'Эм',
      subCategory: 'Өвдөлт намдаах',
      form: 'Шахмал',
      dosage: '400мг',
      manufacturer: 'Фарма Интернэшнл',
      supplier: 'Монос Фарм',
      batchNumber: 'BT34567',
      expiryDate: '2026-06-18',
      quantity: 880,
      unit: 'шахмал',
      location: 'Хурдан авалт A-07',
      reorderLevel: 150,
      price: 10.2,
      status: 'Хангалттай',
      lastUpdated: '2025-04-08',
      description: 'Үрэвсэл намдаах, өвдөлт намдаах'
    },
    {
      id: 'MED-004',
      name: 'Цетиризин',
      category: 'Эм',
      subCategory: 'Харшлын эсрэг',
      form: 'Шахмал',
      dosage: '10мг',
      manufacturer: 'ГлаксоСмитКлайн',
      supplier: 'Гранд Фарма',
      batchNumber: 'BT45678',
      expiryDate: '2025-09-15',
      quantity: 65,
      unit: 'шахмал',
      location: 'Харшлын эсрэг C-02',
      reorderLevel: 100,
      price: 18.5,
      status: 'Дуусаж байгаа',
      lastUpdated: '2025-04-02',
      description: 'H1 гистамины антагонист, харшлын эсрэг'
    },
    {
      id: 'SUP-001',
      name: 'Хөвөн',
      category: 'Хэрэгсэл',
      subCategory: 'Боолт',
      form: 'Иж бүрдэл',
      dosage: null,
      manufacturer: 'МедСаплай ХХК',
      supplier: 'МедСаплай ХХК',
      batchNumber: 'BT56789',
      expiryDate: '2027-04-16',
      quantity: 235,
      unit: 'иж бүрдэл',
      location: 'Хэрэгсэл D-01',
      reorderLevel: 50,
      price: 4.2,
      status: 'Хангалттай',
      lastUpdated: '2025-04-12',
      description: 'Ариутгасан хөвөн боолт'
    },
    {
      id: 'SUP-002',
      name: 'Нэг удаагийн тариур',
      category: 'Хэрэгсэл',
      subCategory: 'Тариур',
      form: '5мл',
      dosage: null,
      manufacturer: 'МедСаплай ХХК',
      supplier: 'МедСаплай ХХК',
      batchNumber: 'BT67890',
      expiryDate: '2028-01-10',
      quantity: 25,
      unit: 'хайрцаг',
      location: 'Хэрэгсэл D-04',
      reorderLevel: 30,
      price: 35.0,
      status: 'Дахин захиалах',
      lastUpdated: '2025-03-25',
      description: 'Нэг удаагийн ариутгасан тариур, 100ш/хайрцаг'
    }
  ];
  
  // Category and form options
  export const categoryOptions = ['Эм', 'Хэрэгсэл', 'Уусмал', 'Вакцин', 'Бусад'];
  
  export const subCategoryOptions = {
    'Эм': ['Өвдөлт намдаах', 'Антибиотик', 'Харшлын эсрэг', 'Даралт бууруулах', 'Чихрийн шижин', 'Бусад'],
    'Хэрэгсэл': ['Боолт', 'Тариур', 'Маск', 'Бээлий', 'Бусад'],
    'Уусмал': ['Физиологийн', 'Глюкоз', 'Рингер', 'Бусад'],
    'Вакцин': ['Томуу', 'Улаан бурхан', 'Саа', 'Бусад'],
    'Бусад': ['Бусад']
  };
  
  export const formOptions = {
    'Эм': ['Шахмал', 'Капсул', 'Шингэн', 'Тариа', 'Наалт', 'Бусад'],
    'Хэрэгсэл': ['Иж бүрдэл', '5мл', '10мл', '20мл', 'Бусад'],
    'Уусмал': ['100мл', '250мл', '500мл', '1000мл', 'Бусад'],
    'Вакцин': ['0.5мл', '1мл', 'Бусад'],
    'Бусад': ['Бусад']
  };
  
  // Status options with colors
  export const statusOptions = [
    { value: 'Хангалттай', color: 'success' },
    { value: 'Дуусаж байгаа', color: 'warning' },
    { value: 'Дахин захиалах', color: 'error' },
    { value: 'Хугацаа дуусах дөхсөн', color: 'info' },
    { value: 'Идэвхгүй', color: 'default' }
  ];