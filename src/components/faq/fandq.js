import React from "react";
import "./fandq.css";
import { Link } from "react-router-dom";
const Fandq = () => {
  return (
    <div class="faq_area ">
      <div class="container faq">
        <div class="row">
          <h1>سوالات متداول</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-lg-8">
            <div class="accordion faq-accordian" id="faqAccordion">
              <div class="card border-0">
                <div class="card-header" id="heading1">
                  <h6
                    class="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    مشکل1
                    <i className="fa fa-chevron-down"></i>
                  </h6>
                </div>
                <div
                  class="collapse"
                  id="collapse1"
                  aria-labelledby="heading1"
                  data-parent="#faqAccordion"
                >
                  <div class="card-body">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card border-0">
                <div class="card-header" id="heading2">
                  <h6
                    class="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    مشکل2
                    <i className="fa fa-chevron-down"></i>
                  </h6>
                </div>
                <div
                  class="collapse"
                  id="collapse2"
                  aria-labelledby="heading2"
                  data-parent="#faqAccordion"
                >
                  <div class="card-body">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center d-flex align-items-center justify-content-center mt-4">
              <p class="mb-0 px-2">پاسخ سوال خود را پیدا نکردید؟</p>
              <Link to="/" className="callus">با ما تماس بگیرید</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fandq;
