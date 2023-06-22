import { useState } from "react";
import {
  TransactionCancel,
  TransactionGit,
  TransactionHTML,
  TransactionPHP,
  TransactionSuccess,
} from "../../assets/images";
import "../../assets/css/style-transaction.css";

const TransactionContent = () => {
  const [transactionDetail, useTransactionDetail] = useState([
    {
      id: 1,
      category: "Kelas Coding",
      status: TransactionSuccess,
      items: [
        {
          classImg: TransactionHTML,
          className: "HTML Dasar",
          date: "6 Maret 2023, 17:42 WIB",
          price: "Gratis",
        },
      ],
      totalPrice: "Gratis",
    },
    {
      id: 2,
      category: "Kelas Coding",
      status: TransactionCancel,
      items: [
        {
          classImg: TransactionGit,
          className: "Github Dasar",
          date: "-",
          price: "Gratis",
        },
        {
          classImg: TransactionPHP,
          className: "PHP Intermediate",
          date: "-",
          price: "Rp500.000",
        },
      ],
      totalPrice: "Rp500.000",
    },
  ]);
  return (
    <>
      {transactionDetail.map((transaction) => (
        <div className="row" key={transaction.id}>
          <div className="col-12 mt-3">
            <div className="transaction-card px-4 py-3 rounded bgr-light shadow-sm">
              <div className="transaction-header d-flex justify-content-between">
                <h3 className="category my-auto">{transaction.category}</h3>
                <img src={transaction.status} />
              </div>
              <hr />
              {transaction.items.map((item, index) => (
                <div className="transaction-body mb-2" key={index}>
                  <div className="row">
                    <div className="col-sm-1 col-md-1 col-lg-1">
                      <img src={item.classImg} className="transaction-class" />
                    </div>
                    <div className="col-sm-11 col-md-11 col-lg-11 d-flex flex-column ">
                      <div className="transaction-detail-header d-flex justify-content-between">
                        <h3 className="detail-header">Nama Kelas</h3>
                        <h3 className="detail-header">Waktu Pembayaran</h3>
                        <h3 className="detail-header">Harga</h3>
                      </div>
                      <div className="transaction-detail-body d-flex justify-content-between">
                        <h3 className="detail-body">{item.className}</h3>
                        <h3 className="detail-body">{item.date}</h3>
                        <h3 className="detail-body">{item.price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              <div className="transaction-footer d-flex justify-content-between">
                <h3 className="placeholder-price">Total Pembayaran</h3>
                <h3 className="price-total">{transaction.totalPrice}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransactionContent;
