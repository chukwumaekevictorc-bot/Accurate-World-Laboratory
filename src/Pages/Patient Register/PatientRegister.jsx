
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import eagle from "../../assets/eagle.JPG"
import "./PatientRegister.css";
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"

const PatientRegister = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://students-learning-api.onrender.com/api/auth"
      );

      setUsers(
        Array.isArray(response.data)
          ? response.data
          : response.data.users || response.data.data || []
      );
    } catch (error) {
      console.log(error);
      setError("Unable to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header/>
      <section className="testimonials">
        <h4>REGISTERED PATIENTS</h4>
        <h2>Details of registered patients</h2>

        {loading && <p>Loading users...</p>}
        {error && <p role="alert">{error}</p>}

        {!loading && !error && users.length === 0 && (
          <p>No users found.</p>
        )}

        <div className="Testimonial-container">
          {users.map((user) => (
            <div className="card" key={user._id || user.id}>
              <img
                src={eagle}
                alt={`${user.firstName || "User"} profile`}
              />

              <h3>
                {user.firstName} {user.lastName}
              </h3>

              <p>Email: {user.email}</p>
              <p>Address: {user.address || "Not provided"}</p>

              <button
                className="details-btn"
                onClick={() =>
                  navigate(`/users/${user._id || user.id}`)
                }
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default PatientRegister;
