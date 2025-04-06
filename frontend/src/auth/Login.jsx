import { useState } from 'react';
import './auth.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="auth-container">
      <div className="auth-box bg-white rounded-4">
        <div className="row g-0 h-100">
          <div className="col-md-5 p-4">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3">Login to your Teams account</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-7 h-100">
            <img
              src="office_desk.jpg"
              className="auto-rhs-image rounded-end-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
