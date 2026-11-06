import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectAssay.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const SelectAssay = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Change this logic later when connecting to a real backend API
    const isSuccessful = true;

    if (isSuccessful) {
      navigate("/SuccessPage");
    } else {
      navigate(0);
    }
  };

  return (
    <div>
      <Header />
      <main className="dashboard-container">
        <section className="welcome-banner">
          <h2>Accurate World Laboratory</h2>
          <p>
            Select the laboratory test parameters you wish to request below.
          </p>
        </section>

        {/* Test Request Form */}
        <section className="form-card">
          <h3>New Laboratory Test Request</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patient-name">Patient Full Name</label>
              <input
                type="text"
                id="patient-name"
                name="patient-name"
                placeholder="Enter patient name"
                required
              />
            </div>

            <div className="form-group">
              <label>Select Test Parameters (Check all that apply) </label>

              <div className="checkbox-grid">
                {/* Clinical Pathology Tests */}
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="FBC" /> Complete
                  Blood Count (FBC)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Lipid" /> Lipid
                  Profile Test
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Liver" /> Liver
                  Function Test (LFT)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Kidney" /> Kidney
                  Function Test (U/E/C)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Urinalysis" />{" "}
                  Comprehensive Urinalysis
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Glycated" />{" "}
                  Glycated Hemoglobin (HbA1c)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Thyroid" /> Thyroid
                  Function Panel (TSH, T3, T4)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Cardiac" /> Cardiac
                  Troponin & Enzymes
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Coagulation" />{" "}
                  Coagulation Profile (PT/INR, APTT)
                </label>

                {/* Molecular Diagnostics & Infectious Diseases */}
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="PCR-Covid" />{" "}
                  SARS-CoV-2 (COVID-19) PCR
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="PCR-TB" /> Truenat
                  / GeneXpert MTB (TB)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Hepatitis" /> Viral
                  Hepatitis Panel (B & C)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="HIV" /> HIV 1 & 2
                  Antibody / Viral Load
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Malaria" /> Malaria
                  Parasite (Microscopy / RDT)
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Widal" /> Typhoid
                  Widal Agglutination Test
                </label>

                {/* Research & Quality Control */}
                <label className="checkbox-item">
                  <input type="checkbox" name="tests" value="Custom" /> Custom
                  Research Assay Validation
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="clinical-notes">
                Clinical Notes / Doctor's Instructions
              </label>
              <textarea
                id="clinical-notes"
                name="clinical-notes"
                rows="3"
                placeholder="Enter any specific symptoms or instructions..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Test Request
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SelectAssay;
