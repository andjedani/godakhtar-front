export const formData = [
  {
    label: "نام مشتری",
    enLabel: "customerName",
    type: "text",
    size: "3"
  },
  {
    label: "شماره مشتری",
    enLabel: "customerNumber",
    type: "text",
    size: "3"
  },
  {
    label: "کد اقتصادی",
    enLabel: "financialCode",
    type: "text",
    size: "2"
  },
  {
    label: "کد ملی",
    enLabel: "nationalId",
    type: "text",
    size: "2"
  },
  {
    label: "شماره ثبت",
    enLabel: "companyCode",
    type: "text",
    size: "2"
  },

  {
    enLabel: "customerPriority",
    type: "select",
    size: "4",
    values: [
      { name: "اولویت مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "اولویت بالا", value: "high", disabled: false },
      { name: "اولویت متوسط", value: "normal", disabled: false },
      { name: "اولویت پایین", value: "low", disabled: false }
    ]
  },
  {
    enLabel: "customerSegment",
    type: "select",
    size: "4",
    values: [
      { name: "بخش‌بندی مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "نفت", value: "oil", disabled: false },
      { name: "گاز", value: "gas", disabled: false },
      { name: "پتروشیمی", value: "petrochemiscals", disabled: false },
      { name: "پالایشگاه", value: "refinery", disabled: false },
      { name: "نیروگاه", value: "powerhouse", disabled: false },
      { name: "ساختمان", value: "building", disabled: false },
      { name: "فولاد", value: "steel", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    enLabel: "customerType",
    type: "select",
    size: "4",
    values: [
      { name: "طبقه‌بندی مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "GC", value: "GC", disabled: false },
      { name: "EPC", value: "EPC", disabled: false },
      { name: "بازرگانی", value: "commerce", disabled: false },
      { name: "بهره‌بردار", value: "beneficiary", disabled: false },
      { name: "فروشگاه", value: "store", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    enLabel: "activity",
    type: "select",
    size: "4",
    values: [
      { name: "نوع فعالیت را مشخص کنید", value: "0", disabled: true },
      { name: "بهره‌بردار", value: "beneficiary", disabled: false },
      { name: "پیمانکاری", value: "contracting", disabled: false },
      { name: "مشاوره مهندسی", value: "consulting", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    enLabel: "ownership",
    type: "select",
    size: "4",
    values: [
      { name: "نوع مالکیت را مشخص کنید", value: "0", disabled: true },
      { name: "مالکیت خصوصی", value: "private", disabled: false },
      { name: "مالکیت دولتی", value: "governmental", disabled: false },
      { name: "مالکیت نیمه‌دولتی", value: "semiGovernmental", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    label: "مالک / مالکیت",
    enLabel: "owner",
    type: "text",
    size: "4"
  },

  {
    enLabel: "acquainted",
    type: "select",
    size: "4",
    values: [
      { name: "نحوه‌ی آشنایی را مشخص کنید", value: "0", disabled: true },
      { name: "نمایشگاه", value: "exhibition", disabled: false },
      { name: "سایت", value: "website", disabled: false },
      { name: "معرفی مشتریان", value: "PR", disabled: false },
      { name: "وندورلیست", value: "vendorlist", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    enLabel: "history",
    type: "select",
    size: "4",
    values: [
      { name: "آیا مشتری سابقه‌ی خرید دارد؟", value: "0", disabled: true },
      { name: "سابقه‌ی خرید دارد", value: "yes", disabled: false },
      { name: "سابقه‌ی خرید ندارد", value: "no", disabled: false }
    ]
  },
  {
    enLabel: "inquiryHistory",
    type: "select",
    size: "4",
    values: [
      { name: "آیا مشتری سابقه‌ی استعلام دارد؟", value: "0", disabled: true },
      { name: "خیر", value: "no", disabled: false },
      { name: "بله / عدم خرید", value: "yes, accept", disabled: false },
      { name: "بله / منجر به خرید", value: "yes, reject", disabled: false }
    ]
  },
  {
    label: "آدرس دفتر",
    enLabel: "officeAddress",
    type: "text",
    size: "4"
  },
  {
    label: "آدرس کارخانه",
    enLabel: "factoryAddress",
    type: "text",
    size: "4"
  },
  {
    label: "کد پستی",
    enLabel: "postalCode",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن",
    enLabel: "officePhone",
    type: "tel",
    size: "3"
  },
  {
    label: "فکس",
    enLabel: "officeFax",
    type: "tel",
    size: "3"
  },
  {
    label: "آدرس ایمیل",
    enLabel: "companyEmail",
    type: "email",
    size: "3"
  },
  {
    label: "آدرس سایت",
    enLabel: "website",
    type: "url",
    size: "3"
  },
  {
    label: "مدیرعامل",
    enLabel: "ceo",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر مدیرعامل",
    enLabel: "ceoOfficePhone",
    type: "tel",
    size: "4"
  },
  {
    label: "تلفن همراه مدیرعامل",
    enLabel: "ceoCellPhone",
    type: "tel",
    size: "4"
  },

  {
    label: "مدیر بازرگانی",
    enLabel: "commerceManager",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر بازرگانی",
    enLabel: "commerceOfficePhone",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل بازرگانی",
    enLabel: "commerceEmail",
    type: "email",
    size: "4"
  },

  {
    label: "مدیر تدارکات",
    enLabel: "supplieManager",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر تدارکات",
    enLabel: "supplieOfficePhone",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل تدارکات",
    enLabel: "supplieEmail",
    type: "email",
    size: "4"
  },

  {
    label: "مدیر تعمیرات",
    enLabel: "repairManager",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر تعمیرات",
    enLabel: "repairOfficePhone",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل تعمیرات",
    enLabel: "repairEmail",
    type: "email",
    size: "4"
  },

  {
    label: "کارشناس",
    enLabel: "expert",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر کارشناس",
    enLabel: "expertPhone",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل کارشناس",
    enLabel: "expertEmail",
    type: "email",
    size: "4"
  },

  {
    label: "افزودن فرد کلیدی",
    enLabel: "keyPersons",
    type: "arrayList",
    size: "12",
    forms: [
      {
        label: "نام",
        enLabel: "keyPersonName",
        type: "text",
        size: "3"
      },
      {
        label: "تلفن دفتر",
        enLabel: "keyPersonOfficePhone",
        type: "tel",
        size: "3"
      },
      {
        label: "تلفن همراه",
        enLabel: "keyPersonMobilePhone",
        type: "tel",
        size: "3"
      },
      {
        label: "ایمیل",
        enLabel: "keyPersonEmail",
        type: "email",
        size: "3"
      },
      {
        label: "توضیحات",
        enLabel: "keyPersonDescription",
        type: "text",
        size: "12"
      }
    ]
  },
  {
    enLabel: "typeOfOrder",
    type: "select",
    size: "6",
    values: [
      { name: "نوع خرید را مشخص کنید", value: "0", disabled: true },
      { name: "Gate", value: "Gate", disabled: false },
      { name: "Globe", value: "Globe", disabled: false },
      { name: "Check", value: "Check", disabled: false },
      { name: "Ball", value: "Ball", disabled: false },
      { name: "Butterfly", value: "Butterfly", disabled: false },
      { name: "خدمات تعمیر", value: "repairService", disabled: false },
      { name: "خدمات نگهداری", value: "maintenanceService", disabled: false },
      { name: "قطعات یدکی", value: "sparePart", disabled: false },
      { name: "سایر", value: "others", disabled: false }
    ]
  },
  {
    label: "حجم خرید ریالی",
    enLabel: "valueOfOrder",
    type: "text",
    size: "6"
  },
  {
    label: "آخرین بازدید از سایت مشتری",
    enLabel: "lastVisitOfCustomerWebsite",
    type: "text",
    size: "6"
  },
  {
    label: "آخرین بازدید مشتری از سایت",
    enLabel: "lastCustomerVisitOfOurWebsite",
    type: "text",
    size: "6"
  },
  {
    label: "مکانیسم خرید",
    enLabel: "orderMechanism",
    type: "text",
    size: "6"
  },
  {
    label: "توضیحات خرید",
    enLabel: "orderDesciption",
    type: "text",
    size: "6"
  },
  {
    label: "سایر توضیحات",
    enLabel: "otherDescription",
    type: "text",
    size: "12"
  }
];
