import { RewardCoin, RewardGem, RewardHoodie, LogoPoint } from "../../assets/images";
import "../../assets/css/style-award.css";
import { useState } from "react";

const AwardContent = () => {
  const [award, useAward] = useState([
    {
      taglineReward: "Tukarkan dengan e-wallet Rp.10.000,-",
      currentPoint: "8000 Point",
      imgReward: RewardCoin,
    },
    {
      taglineReward: "Tukarkan dengan Voucher game Rp.50.000,-",
      currentPoint: "25.000 Point",
      imgReward: RewardGem,
    },
    {
      taglineReward: "Tukarkan dengan Hoodie SevA",
      currentPoint: "50.000 Point",
      imgReward: RewardHoodie,
    },
  ]);
  return (
    <>
      <div className="card card-rounded p-4 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h3 className="title mb-4">Total point yang didapatkan</h3>
          <div className="card-award w-100 px-4">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xl-4 p-4">
                <img src={LogoPoint} alt="" className="img-fluid my-auto" />
              </div>
              <div className="col-sm-8 col-md-8 col-xl-8 p-4 my-3">
                <h3 className="tagline-award">Point yang terkumpul</h3>
                <hr className="line-award" />
                <h1 className="award-status">1500 Point</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-rounded p-4 shadow-sm mt-4">
        <div className="card-body mt-3">
          <h3 className="title mb-4">Hadiah yang dapat ditukarkan</h3>
          {award.map((item, index) => (
            <div className="reward-status w-100 mt-3 rounded mb-4" key={index}>
              <div className="row">
                <div className="container d-flex">
                  <div className="col-sm-8 col-md-8 col-xl-8 py-4 px-2">
                    <h3 className="tagline-reward ms-4">{item.taglineReward}</h3>
                    <hr className="line-reward-2 ms-4" />
                    <h1 className="current-point ms-4">{item.currentPoint}</h1>
                    <button className="btn bgr-alternative my-2 mx-4 py-2 px-3">
                      <h3 className="button-text color-light my-auto ">Tukar Point</h3>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-xl-4 mx-5 my-auto">
                    <img src={item.imgReward} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardContent;
