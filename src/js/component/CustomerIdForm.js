import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBProgress,
  MDBNavbar,
  MDBNavbarBrand
} from "mdbreact";

class CustomerIdForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChange = event => {
    const dataLable = event.target.getAttribute("datalabel");
    const value = event.target.value;

    this.setState({ [dataLable]: value });

    console.log(this.state);
  };

  render() {
    return (
      <>
        <MDBNavbar color="primary-color" dark scrolling fixed="top">
          <MDBNavbarBrand>
            <h1>شناسه مشتری</h1>
          </MDBNavbarBrand>

          <MDBProgress
            color="success"
            value={(Object.keys(this.state).length / 36) * 100}
            className="w-50"
          />
          <MDBBtn
            color="success"
            size="lg"
            disabled={Object.keys(this.state).length !== 36}
          >
            ثبت مشتری
          </MDBBtn>
        </MDBNavbar>
        <MDBContainer fluid className="text-center p-5">
          <MDBCard>
            <MDBCardBody>
              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  نام مشتری
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="customerName"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  کد مشتری
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="number"
                    className="w-100"
                    datalabel="customerCode"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  اولویت مشتری
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="customerPriority"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      اولویت‌ها
                    </option>
                    <option value="high">بالا</option>
                    <option value="normal">متوسط</option>
                    <option value="low">پایین</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  کد اقتصادی
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <MDBInput
                    type="number"
                    className="w-100"
                    datalabel="financialCode"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  شناسه ملی
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="number"
                    className="w-100"
                    datalabel="nationalId"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  شماره ثبت
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <MDBInput
                    type="number"
                    className="w-100"
                    datalabel="companyCode"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  آدرس دفتر
                </MDBCol>
                <MDBCol className="align-self-center" size="4">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="officeAddress"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  تلفن
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="officePhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  فکس
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="officeFax"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  آدرس کارخانه
                </MDBCol>
                <MDBCol className="align-self-center" size="4">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="factoryAddress"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  آدرس ایمیل
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="email"
                    className="w-100"
                    datalabel="companyEmail"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  آدرس سایت
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="url"
                    className="w-100"
                    datalabel="website"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  کد پستی
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <MDBInput
                    type="number"
                    className="w-100"
                    datalabel="postalCode"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  مدیر عامل
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="ceo"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  تلفن مدیرعامل
                </MDBCol>
                <MDBCol className="align-self-center" size="3">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="ceoPhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <br />

          <MDBCard>
            <MDBCardBody>
              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  مدیر بازرگانی
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="commerceManager"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  مدیر تدارکات
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="supplieManager"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  مدیر تعمیرات
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="repairManager"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  کارشناس
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="expert"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  تلفن بازرگانی
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="commercePhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  تلفن تدارکات
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="suppliePhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  تلفن تعمیرات
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="repairPhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  تلفن کارشناس
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="tel"
                    className="w-100"
                    datalabel="expertPhone"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  ایمیل بازرگانی
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="email"
                    className="w-100"
                    datalabel="commerceEmail"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  ایمیل تدارکات
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  <MDBInput
                    type="email"
                    className="w-100"
                    datalabel="supplieEmail"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  ایمیل تعمیرات
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="email"
                    className="w-100"
                    datalabel="repairEmail"
                    onInput={this.handleChange}
                  />
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  ایمیل کارشناس
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <MDBInput
                    type="email"
                    className="w-100"
                    datalabel="expertEmail"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <br />

          <MDBCard>
            <MDBCardBody>
              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  نوع مالکیت
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="ownership"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      نوع مالکیت
                    </option>
                    <option value="private">خصوصی</option>
                    <option value="governmental">دولتی</option>
                  </select>
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  نوع فعالیت
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="activity"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      نوع فعالیت
                    </option>
                    <option value="beneficiary">بهره‌بردار</option>
                    <option value="contracting">پیمانکاری</option>
                    <option value="consulting">مشاوره مهندسی</option>
                  </select>
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  طبقه‌بندی مشتری
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="customerType"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      انواع مشتری
                    </option>
                    <option value="GC">GC</option>
                    <option value="EPC">EPC</option>
                    <option value="commerce">بازارگانی</option>
                    <option value="beneficiary">بهره‌بردار</option>
                    <option value="store">فروشگاه</option>
                  </select>
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  نحوه‌ی آشنایی
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="acquainted"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      نحوه‌ی آشنایی
                    </option>
                    <option value="exhibition">نمایشگاه</option>
                    <option value="website">سایت</option>
                    <option value="PR">معرفی مشتریان</option>
                    <option value="vendorlist">وندورلیست</option>
                    <option value="others">سایر</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  سابقه‌ی خرید
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="history"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      سابقه
                    </option>
                    <option value="yes">بلی</option>
                    <option value="no">خیر</option>
                  </select>
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  نوع خرید
                </MDBCol>
                <MDBCol className="align-self-center" size="1">
                  <select
                    className="browser-default custom-select w-100"
                    defaultValue="0"
                    datalabel="typeOfOrder"
                    onInput={this.handleChange}
                  >
                    <option disabled value="0">
                      نوع خرید
                    </option>
                    <option value="Gate">Gate</option>
                    <option value="Globe">Globe</option>
                    <option value="Check">Check</option>
                    <option value="Ball">Ball</option>
                    <option value="Butterfly">Butterfly</option>
                    <option value="repairService">خدمات تعمیر</option>
                    <option value="maintenanceService">خدمات نگهداری</option>
                    <option value="sparePart">قطعات یدکی</option>
                    <option value="others">سایر</option>
                  </select>
                </MDBCol>
                <MDBCol className="align-self-center" size="2">
                  حجم خرید ریالی
                </MDBCol>
                <MDBCol className="align-self-center" size="5">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="valyeOfOrder"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  توضیحات خرید
                </MDBCol>
                <MDBCol className="align-self-center" size="11">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="orderDesciption"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="p-1">
                <MDBCol className="align-self-center" size="1">
                  توضیحات درباره‌ی مشتری
                </MDBCol>
                <MDBCol className="align-self-center" size="11">
                  <MDBInput
                    type="text"
                    className="w-100"
                    datalabel="customerDescription"
                    onInput={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </>
    );
  }
}

export default CustomerIdForm;
