export const formData = [
  {
    label: "نام مشتری",
    enLabel: "customerName",
    type: "text",
    size: "2"
  },
  {
    label: "کد مشتری",
    enLabel: "customerCode",
    type: "number",
    size: "2"
  },
  {
    enLabel: "customerPriority",
    type: "select",
    size: "4",
    values: [
      { name: "اولویت را مشخص کنید", value: "0", disabled: true },
      { name: "اولویت بالا", value: "high", disabled: false },
      { name: "اولویت متوسط", value: "normal", disabled: false },
      { name: "اولویت پایین", value: "low", disabled: false }
    ]
  },
  {
    label: "کد اقتصادی",
    enLabel: "financialCode",
    type: "number",
    size: "4"
  },
  {
    label: "شناسه ملی",
    enLabel: "nationalId",
    type: "number",
    size: "2"
  },
  {
    label: "شماره ثبت",
    enLabel: "companyCode",
    type: "number",
    size: "2"
  },
  {
    label: "آدرس دفتر",
    enLabel: "officeAddress",
    type: "text",
    size: "3"
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
    size: "2"
  },
  {
    label: "آدرس کارخانه",
    enLabel: "factoryAddress",
    type: "text",
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
    label: "کد پستی",
    enLabel: "postalCode",
    type: "number",
    size: "3"
  },
  {
    label: "مدیرعامل",
    enLabel: "ceo",
    type: "text",
    size: "6"
  },
  {
    label: "تلفن مدیرعامل",
    enLabel: "ceoPhone",
    type: "tel",
    size: "6"
  },

  {
    label: "مدیر بازرگانی",
    enLabel: "commerceManager",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن بازرگانی",
    enLabel: "commercePhone",
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
    label: "تلفن تدارکات",
    enLabel: "suppliePhone",
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
    label: "تلفن تعمیرات",
    enLabel: "repairPhone",
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
    label: "تلفن کارشناس",
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
    enLabel: "ownership",
    type: "select",
    size: "3",
    values: [
      { name: "نوع مالکیت را مشخص کنید", value: "0", disabled: true },
      { name: "مالکیت خصوصی", value: "private", disabled: false },
      { name: "مالکیت دولتی", value: "governmental", disabled: false }
    ]
  },
  {
    enLabel: "activity",
    type: "select",
    size: "3",
    values: [
      { name: "نوع فعالیت را مشخص کنید", value: "0", disabled: true },
      { name: "بهره‌بردار", value: "beneficiary", disabled: false },
      { name: "پیمانکاری", value: "contracting", disabled: false },
      { name: "مشاوره مهندسی", value: "consulting", disabled: false }
    ]
  },
  {
    enLabel: "customerType",
    type: "select",
    size: "3",
    values: [
      { name: "نوع مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "GC", value: "GC", disabled: false },
      { name: "EPC", value: "EPC", disabled: false },
      { name: "بازرگانی", value: "commerce", disabled: false },
      { name: "بهره‌بردار", value: "beneficiary", disabled: false },
      { name: "فروشگاه", value: "store", disabled: false }
    ]
  },
  {
    enLabel: "acquainted",
    type: "select",
    size: "3",
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
    size: "3",
    values: [
      { name: "آیا مشتری سابقه‌ی خرید دارد؟", value: "0", disabled: true },
      { name: "سابقه‌ی خرید دارد", value: "yes", disabled: false },
      { name: "سابقه‌ی خرید ندارد", value: "no", disabled: false }
    ]
  },
  {
    enLabel: "typeOfOrder",
    type: "select",
    size: "3",
    values: [
      { name: "نوع سفارش را مشخص کنید", value: "0", disabled: true },
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
    type: "number",
    size: "6"
  },
  {
    label: "توضیحات خرید",
    enLabel: "orderDesciption",
    type: "text",
    size: "6"
  },
  {
    label: "توضیحات درباره‌ی مشتری",
    enLabel: "customerDescription",
    type: "text",
    size: "6"
  }
];
