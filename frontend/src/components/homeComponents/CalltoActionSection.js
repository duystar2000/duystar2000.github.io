import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn có cần thêm lời khuyên?</h2>
              <p>Đăng ký miễn phí và nhận những lời khuyên mới nhất.</p>
              <form className="form-section">
                <input
                  placeholder="Email Của Bạn..."
                  name="email"
                  type="email"
                />
                <input value="Yes!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
