import React from "react";
import { useNavigate } from "react-router-dom";
import "./VisitorDashboard.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const VisitorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Header />
      <main className="construction-container">
        <section className="construction-card">
          <span className="brand-badge">Accurate World Laboratory</span>
          <h1 className="construction-title">Page Under Construction</h1>
          <p className="construction-message">
            We are working hard to bring you new diagnostic tools and diagnostic
            services. This section of our lab portal will be available soon!
          </p>

          <div className="action-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Return Home
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VisitorDashboard;
