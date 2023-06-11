import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê sản phẩm</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-laptop1-bcvrc/embed/charts?id=6462fc20-36b3-4339-8192-adc5fc8ec2ee&maxDataAge=3600&theme=light&autoRefresh=true"
          />
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
