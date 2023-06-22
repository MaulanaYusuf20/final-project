import { useState } from "react";
import {
  PaymentBank,
  PaymentEwallet,
  PaymentNonBank,
  PaymentSeva,
} from "../../assets/icons";
import { DanaPayment, GopayPayment, OVOPayment } from "../../assets/images";

const PaymentMethod = () => {
  const [activeAccordion, setActiveAccordion] = useState("");
  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? "" : accordionId);
  };
  return (
    <>
      <div className="payment-method-wrapper rounded shadow-sm p-3 mt-3 bgr-light">
        <h1 className="title poppins-medium">Metode Pembayaran</h1>
        <button className="btn btn-payment-method w-100 p-3">
          <div className="button-wrapper d-flex">
            <img src={PaymentSeva} />
            <h3 className="payment-method-header my-auto ms-2">SevACash</h3>
          </div>
        </button>

        {/* Accordion 1 */}
        <div className="accordion my-2" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${
                  activeAccordion === "accordionOne" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("accordionOne")}
              >
                <div className="button-wrapper d-flex">
                  <img src={PaymentBank} alt="" />
                  <h3 className="payment-method-header my-auto ms-2">
                    Transfer Bank
                  </h3>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${
                activeAccordion === "accordionOne" ? "show" : ""
              }`}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bgr-body">
                <div className="button-wrapper d-flex">
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={DanaPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={GopayPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={OVOPayment} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Accordion 1 */}

        {/* Accordion 2 */}
        <div className="accordion my-2" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${
                  activeAccordion === "accordionTwo" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("accordionTwo")}
              >
                <div className="button-wrapper d-flex">
                  <img src={PaymentEwallet} alt="" />
                  <h3 className="payment-method-header my-auto ms-2">
                    E-Wallet
                  </h3>
                </div>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${
                activeAccordion === "accordionTwo" ? "show" : ""
              }`}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bgr-body">
                <div className="button-wrapper d-flex">
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={DanaPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={GopayPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={OVOPayment} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Accordion 2 */}

        {/* Accordion 3 */}
        <div className="accordion my-2" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button ${
                  activeAccordion === "accordionThree" ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("accordionThree")}
              >
                <div className="button-wrapper d-flex">
                  <img src={PaymentNonBank} alt="" />
                  <h3 className="payment-method-header my-auto ms-2">
                    OTC non-Bank
                  </h3>
                </div>
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${
                activeAccordion === "accordionThree" ? "show" : ""
              }`}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bgr-body">
                <div className="button-wrapper d-flex">
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={DanaPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={GopayPayment} alt="" />
                  </button>
                  <button className="btn btn-payment-method me-2 w-100">
                    <img src={OVOPayment} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Accordion 3 */}
      </div>
    </>
  );
};

export default PaymentMethod;
