import { Routes, Route } from 'react-router-dom';
import Login from './auth/login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
    </>
  );
}

export default App;
