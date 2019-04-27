import React from "react";
import { MDBContainer, MDBRow, MDBInput, MDBCol } from "mdbreact";

function App() {
  return (
    <MDBContainer fluid className="text-center p-5">
      <MDBRow className="p-1">
        <MDBCol className="align-self-center">
          <h1>شناسه مشتری</h1>
        </MDBCol>
      </MDBRow>
      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          نام مشتری
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <MDBInput color="info" type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          کد مشتری
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          اولویت مشتری
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              اولویت‌ها
            </option>
            <option value="1">بالا</option>
            <option value="2">متوسط</option>
            <option value="3">پایین</option>
          </select>
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          کد اقتصادی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          شناسه ملی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          شماره ثبت
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          آدرس دفتر
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="4"
          md="4"
          sm="4"
          xl="4"
          xs="4"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          تلفن
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          فکس
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          آدرس کارخانه
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="4"
          md="4"
          sm="4"
          xl="4"
          xs="4"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          آدرس ایمیل
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          آدرس سایت
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          کد پستی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          مدیر عامل
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          تلفن مدیرعامل
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="3"
          md="3"
          sm="3"
          xl="3"
          xs="3"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          مدیر بازرگانی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          مدیر تدارکات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          مدیر تعمیرات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          کارشناس
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          تلفن بازرگانی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          تلفن تدارکات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          تلفن تعمیرات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          تلفن کارشناس
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          ایمیل بازرگانی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          ایمیل تدارکات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          ایمیل تعمیرات
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          ایمیل کارشناس
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          نوع مالکیت
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              نوع مالکیت
            </option>
            <option value="1">خصوصی</option>
            <option value="2">دولتی</option>
          </select>
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          نوع فعالیت
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              نوع فعالیت
            </option>
            <option value="1">بهره‌بردار</option>
            <option value="2">پیمانکاری</option>
            <option value="3">مشاوره مهندسی</option>
          </select>
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          طبقه‌بندی مشتری
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              انواع مشتری
            </option>
            <option value="1">GC</option>
            <option value="2">EPC</option>
            <option value="3">بازارگانی</option>
            <option value="4">بهره‌بردار</option>
            <option value="5">فروشگاه</option>
          </select>
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          نحوه‌ی آشنایی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              نحوه‌ی آشنایی
            </option>
            <option value="1">نمایشگاه</option>
            <option value="2">سایت</option>
            <option value="3">معرفی مشتریان</option>
            <option value="4">وندورلیست</option>
            <option value="5">سایر</option>
          </select>
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          سابقه‌ی خرید
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              سابقه
            </option>
            <option value="1">بلی</option>
            <option value="2">خیر</option>
          </select>
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          نوع خرید
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          <select
            className="browser-default custom-select w-100"
            defaultValue="0"
          >
            <option disabled value="0">
              نوع خرید
            </option>
            <option value="1">Gate</option>
            <option value="2">Globe</option>
            <option value="3">Check</option>
            <option value="4">Ball</option>
            <option value="5">Butterfly</option>
            <option value="6">خدمات تعمیر</option>
            <option value="7">خدمات نگهداری</option>
            <option value="8">قطعات یدکی</option>
            <option value="9">سایر</option>
          </select>
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="2"
          md="2"
          sm="2"
          xl="2"
          xs="2"
        >
          حجم خرید ریالی
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="5"
          md="5"
          sm="5"
          xl="5"
          xs="5"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          توضیحات خرید
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="11"
          md="11"
          sm="11"
          xl="11"
          xs="11"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-1">
        <MDBCol
          className="align-self-center"
          lg="1"
          md="1"
          sm="1"
          xl="1"
          xs="1"
        >
          توضیحات درباره‌ی مشتری
        </MDBCol>
        <MDBCol
          className="align-self-center"
          lg="11"
          md="11"
          sm="11"
          xl="11"
          xs="11"
        >
          <MDBInput type="text" className="w-100" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
