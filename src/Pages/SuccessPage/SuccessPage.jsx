import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./SuccessPage.css";

const SuccessPage = () => {
  return (
    <div>
      <Header />
      <main class="success-container">
        <section class="success-card">
          <span class="brand-badge">Accurate World Laboratory</span>
          <h1 class="success-title">Your request has been submitted</h1>
          <p class="success-message">
            Your lab assay parameters have been logged successfully. Our
            diagnostic team is processing your request.
          </p>

          <div class="action-buttons">
            <a href="/" class="btn btn-secondary">
              Go to home page
            </a>
            <a href="/VisitorDashboard" class="btn btn-primary">
              See request progress dashboard
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
