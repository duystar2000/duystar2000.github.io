import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê bán hàng</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-laptop1-bcvrc/embed/charts?id=6462fa86-67dd-44e7-89a6-5e8be00457ca&maxDataAge=3600&theme=light&autoRefresh=true"
          />
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
