export const formData = [
  {
    label: "نام مشتری",
    enLabel: "name",
    type: "text",
    size: "3",
    required: true
  },
  {
    label: "شماره مشتری",
    enLabel: "customer_no",
    type: "text",
    size: "3",
    required: true
  },
  {
    label: "کد اقتصادی",
    enLabel: "financial_code",
    type: "text",
    size: "2"
  },
  {
    label: "کد ملی",
    enLabel: "national_id",
    type: "text",
    size: "2"
  },
  {
    label: "شماره ثبت",
    enLabel: "registration_no",
    type: "text",
    size: "2"
  },

  {
    enLabel: "priority",
    type: "select",
    size: "4",
    values: [
      { name: "اولویت مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "اولویت بالا", value: "h", disabled: false },
      { name: "اولویت متوسط", value: "m", disabled: false },
      { name: "اولویت پایین", value: "l", disabled: false }
    ]
  },
  {
    enLabel: "section",
    type: "select",
    size: "4",
    values: [
      { name: "بخش‌بندی مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "نفت", value: "o", disabled: false },
      { name: "گاز", value: "g", disabled: false },
      { name: "پتروشیمی", value: "p", disabled: false },
      { name: "پالایشگاه", value: "r", disabled: false },
      { name: "نیروگاه", value: "e", disabled: false },
      { name: "ساختمان", value: "c", disabled: false },
      { name: "فولاد", value: "s", disabled: false },
      { name: "سایر", value: "h", disabled: false }
    ]
  },
  {
    enLabel: "classification",
    type: "select",
    size: "4",
    values: [
      { name: "طبقه‌بندی مشتری را مشخص کنید", value: "0", disabled: true },
      { name: "GC", value: "g", disabled: false },
      { name: "EPC", value: "e", disabled: false },
      { name: "بازرگانی", value: "f", disabled: false },
      { name: "بهره‌بردار", value: "o", disabled: false },
      { name: "فروشگاه", value: "s", disabled: false },
      { name: "سایر", value: "h", disabled: false }
    ]
  },
  {
    enLabel: "activity",
    type: "select",
    size: "4",
    values: [
      { name: "نوع فعالیت را مشخص کنید", value: "0", disabled: true },
      { name: "بهره‌بردار", value: "o", disabled: false },
      { name: "پیمانکاری", value: "c", disabled: false },
      { name: "مشاوره مهندسی", value: "s", disabled: false },
      { name: "سایر", value: "h", disabled: false }
    ]
  },
  {
    enLabel: "ownership",
    type: "select",
    size: "4",
    values: [
      { name: "نوع مالکیت را مشخص کنید", value: "0", disabled: true },
      { name: "مالکیت خصوصی", value: "p", disabled: false },
      { name: "مالکیت دولتی", value: "g", disabled: false },
      { name: "مالکیت نیمه‌دولتی", value: "s", disabled: false },
      { name: "سایر", value: "h", disabled: false }
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
      { name: "نمایشگاه", value: "e", disabled: false },
      { name: "سایت", value: "w", disabled: false },
      { name: "معرفی مشتریان", value: "r", disabled: false },
      { name: "وندورلیست", value: "v", disabled: false },
      { name: "سایر", value: "h", disabled: false }
    ]
  },
  {
    enLabel: "deal_history",
    type: "select",
    size: "4",
    values: [
      { name: "آیا مشتری سابقه‌ی خرید دارد؟", value: "0", disabled: true },
      { name: "سابقه‌ی خرید دارد", value: "y", disabled: false },
      { name: "سابقه‌ی خرید ندارد", value: "n", disabled: false }
    ]
  },
  {
    enLabel: "inquiry_history",
    type: "select",
    size: "4",
    values: [
      { name: "آیا مشتری سابقه‌ی استعلام دارد؟", value: "0", disabled: true },
      { name: "خیر", value: "n", disabled: false },
      { name: "بله / عدم خرید", value: "r", disabled: false },
      { name: "بله / منجر به خرید", value: "d", disabled: false }
    ]
  },
  {
    label: "آدرس دفتر",
    enLabel: "office_address",
    type: "text",
    size: "4"
  },
  {
    label: "آدرس کارخانه",
    enLabel: "site_address",
    type: "text",
    size: "4"
  },
  {
    label: "کد پستی",
    enLabel: "postal_code",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن",
    enLabel: "phone",
    type: "tel",
    size: "3"
  },
  {
    label: "فکس",
    enLabel: "fax",
    type: "tel",
    size: "3"
  },
  {
    label: "آدرس ایمیل",
    enLabel: "email",
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
    enLabel: "ceo_office",
    type: "tel",
    size: "4"
  },
  {
    label: "تلفن همراه مدیرعامل",
    enLabel: "ceo_mobile",
    type: "tel",
    size: "4"
  },

  {
    label: "مدیر بازرگانی",
    enLabel: "cfo",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر بازرگانی",
    enLabel: "cfo_office",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل بازرگانی",
    enLabel: "cfo_email",
    type: "email",
    size: "4"
  },

  {
    label: "مدیر تدارکات",
    enLabel: "logistic",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر تدارکات",
    enLabel: "logistic_office",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل تدارکات",
    enLabel: "logistic_email",
    type: "email",
    size: "4"
  },

  {
    label: "مدیر تعمیرات",
    enLabel: "maintenance",
    type: "text",
    size: "4"
  },
  {
    label: "تلفن دفتر تعمیرات",
    enLabel: "maintenance_office",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل تعمیرات",
    enLabel: "maintenance_email",
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
    enLabel: "expert_office",
    type: "tel",
    size: "4"
  },
  {
    label: "ایمیل کارشناس",
    enLabel: "expert_email",
    type: "email",
    size: "4"
  },

  {
    label: "افزودن فرد کلیدی",
    enLabel: "key_persons",
    type: "arrayList",
    size: "12",
    forms: [
      {
        label: "نام",
        enLabel: "name",
        type: "text",
        size: "3"
      },
      {
        label: "تلفن دفتر",
        enLabel: "office",
        type: "tel",
        size: "3"
      },
      {
        label: "تلفن همراه",
        enLabel: "mobile",
        type: "tel",
        size: "3"
      },
      {
        label: "ایمیل",
        enLabel: "email",
        type: "email",
        size: "3"
      },
      {
        label: "توضیحات",
        enLabel: "comments",
        type: "text",
        size: "12"
      }
    ]
  },
  {
    enLabel: "deal_type",
    type: "select",
    size: "6",
    values: [
      { name: "نوع خرید را مشخص کنید", value: "0", disabled: true },
      { name: "Gate", value: "t", disabled: false },
      { name: "Globe", value: "g", disabled: false },
      { name: "Check", value: "c", disabled: false },
      { name: "Ball", value: "o", disabled: false },
      { name: "Butterfly", value: "b", disabled: false },
      { name: "خدمات تعمیر", value: "r", disabled: false },
      { name: "خدمات نگهداری", value: "m", disabled: false },
      { name: "قطعات یدکی", value: "s", disabled: false },
      { name: "سایر", value: "h", disabled: false }
    ]
  },
  {
    label: "حجم خرید ریالی",
    enLabel: "deal_worth",
    type: "text",
    size: "6"
  },
  {
    label: "آخرین بازدید از سایت مشتری",
    enLabel: "last_customer_visit",
    type: "text",
    size: "6"
  },
  {
    label: "آخرین بازدید مشتری از سایت",
    enLabel: "last_godakhtar_visit",
    type: "text",
    size: "6"
  },
  {
    label: "مکانیسم خرید",
    enLabel: "mechanism",
    type: "text",
    size: "6"
  },
  {
    label: "توضیحات خرید",
    enLabel: "deal_comments",
    type: "text",
    size: "6"
  },
  {
    label: "سایر توضیحات",
    enLabel: "comments",
    type: "text",
    size: "12"
  }
];
