import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://img.freepik.com/free-icon/paypal_318-674245.jpg"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://trustweb.vn/wp-content/uploads/2016/11/the-napas-la-gi-cong-thanh-toan-napas-la-gi-2411-7383.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
