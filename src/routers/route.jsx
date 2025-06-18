import { Routes, Route } from 'react-router-dom';
import Awal from "../components/App.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Awal />} />
      </Routes>
  );
}

export default App;