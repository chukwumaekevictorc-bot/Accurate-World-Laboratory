import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./AccurateWorldLaboratory.css";
import office from "../../assets/office.jPG";
import owner from "../../assets/owner.jpeg";

const AccurateWorldLaboratory = () => {
  return (
    <div className="laboratory-page">
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Precision Diagnostics & Quality Testing</h1>

          <p>
            Providing trusted laboratory, diagnostic and research services with
            modern technology, professional expertise and a commitment to
            quality healthcare.
          </p>

          <a href="/Register" className="hero-btn">
            Register With Us
          </a>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src={office} alt="Accurate World Laboratory" />
          </div>

          <div className="about-content">
            <h2>About Accurate World Laboratory</h2>

            <p>
              Accurate World Laboratory is committed to providing reliable,
              accurate and high-quality laboratory services. We are dedicated to
              supporting healthcare delivery, scientific research and disease
              diagnosis through professional laboratory practices.
            </p>

            <p>
              Our focus is on accuracy, efficiency, innovation and customer
              satisfaction. We strive to provide dependable laboratory results
              that support informed medical decisions and improve healthcare
              outcomes.
            </p>

            <p>
              Through continuous improvement, modern diagnostic techniques and
              qualified professionals, we aim to establish ourselves as a
              trusted name in laboratory services.
            </p>

            <a href="/Register" className="about-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND GOALS */}
      <section className="mission-section">
        <h2>Our Mission, Vision & Goals</h2>

        <p className="section-intro">
          Our commitment is guided by a clear purpose and a strong desire to
          make a difference in medical laboratory science.
        </p>

        <div className="mission-container">
          <div className="mission-card">
            <h3>Our Mission</h3>

            <p>
              To provide accurate, reliable and timely laboratory diagnostic
              services through professional excellence, modern technology and a
              commitment to quality in line with ISO 15189 2022.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>

            <p>
              To become a leading and trusted medical laboratory service
              provider, recognised for excellence, innovation, accuracy and
              quality healthcare support.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Goals</h3>

            <p>
              To improve diagnostic accuracy, promote quality laboratory
              practices, support scientific research and ensure customer
              satisfaction through continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <h2>Our Core Services</h2>

        <p className="section-intro">
          We offer a range of laboratory and research services designed to meet
          different diagnostic and scientific needs.
        </p>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🔬</div>

            <h3>Clinical Pathology</h3>

            <p>
              Comprehensive blood, tissue and body fluid analysis to support
              accurate medical diagnosis and reporting.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧬</div>

            <h3>Molecular Diagnostics</h3>

            <p>
              Advanced PCR and molecular testing methods for accurate detection
              and identification of pathogens.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>

            <h3>Research & Quality Control</h3>

            <p>
              Standardised laboratory testing, quality assurance and validation
              services for academic, industrial and clinical research.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧪</div>

            <h3>Medical Laboratory Testing</h3>

            <p>
              Reliable laboratory investigations to support disease screening,
              diagnosis and health monitoring.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📚</div>

            <h3>Research Support</h3>

            <p>
              Laboratory and technical support for students, researchers and
              institutions conducting scientific investigations.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✔️</div>

            <h3>Laboratory Consultancy</h3>

            <p>
              Professional guidance on laboratory procedures, quality management
              and good laboratory practices.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Accurate World Laboratory?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>Accuracy</h3>
            <p>
              We prioritise accurate and dependable laboratory results in all
              our services.
            </p>
          </div>

          <div className="why-card">
            <h3>Professionalism</h3>
            <p>
              We are committed to professional standards, integrity and
              responsible service delivery.
            </p>
          </div>

          <div className="why-card">
            <h3>Modern Technology</h3>
            <p>
              We embrace modern laboratory techniques and technological
              advancement.
            </p>
          </div>

          <div className="why-card">
            <h3>Customer Satisfaction</h3>
            <p>
              We value our clients and strive to provide excellent service and
              support.
            </p>
          </div>
        </div>
      </section>

      {/* MEET THE OWNER */}
      <section className="owner-section" id="owner">
        <h2>Meet the Owner</h2>

        <div className="owner-container">
          <div className="owner-image">
            <img src={owner} alt="Owner of Accurate World Laboratory" />
          </div>

          <div className="owner-content">
            <h3>Meet Our Founder</h3>

            <p>
              Accurate World Laboratory was established with a commitment to
              promoting quality laboratory services, accurate diagnosis and
              scientific excellence.
            </p>

            <p>
              Our founder believes in the importance of reliable laboratory
              investigations in improving healthcare delivery and supporting
              scientific development.
            </p>

            <p>
              Through dedication, professionalism and a vision for excellence,
              the laboratory continues to work towards providing dependable
              services to individuals, healthcare institutions and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Experience Quality Laboratory Services</h2>

        <p>
          Your health and accurate diagnosis matter to us. Connect with Accurate
          World Laboratory today.
        </p>

        <a href="/Register" className="cta-btn">
          Get Started
        </a>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <h2>Contact Accurate World Laboratory</h2>

        <p>
          Do you need laboratory services, research support or professional
          consultation? We are ready to assist you.
        </p>

        <a href="/Register" className="contact-btn">
          Contact Us
        </a>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="contactus-section" id="contactus">
        <h2>Get in Touch</h2>

        <p className="section-intro">
          Reach out to us directly via phone, email, or visit our laboratory
          facility.
        </p>

        <div className="contactus-container">
          <div className="contactus-card">
            <div className="contactus-icon">📞</div>
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+2348032468173">(+234) 803-246-8173</a>
            </p>
            <p>
              <a href="tel:+2348064296783">(+234) 806-429-6783</a>
            </p>
          </div>

          <div className="contactus-card">
            <div className="contactus-icon">✉️</div>
            <h3>Email Address</h3>
            <p>
              <a href="mailto:info@accurateworldlab.com">
                info@accurateworldlab.com
              </a>
            </p>
            <p>
              <a href="mailto:support@accurateworldlab.com">
                support@accurateworldlab.com
              </a>
            </p>
          </div>

          <div className="contactus-card">
            <div className="contactus-icon">📍</div>
            <h3>Office Address</h3>
            <p>12 Umuguma Road, Owerri West, Imo State</p>
          </div>

          <div className="contactus-card">
            <div className="contactus-icon">⏰</div>
            <h3>Working Hours</h3>
            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccurateWorldLaboratory;
