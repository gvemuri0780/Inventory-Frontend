import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import StoreOwnerLoginForm from './StoreOwnerLoginForm'

function App() {

  return (
    <>
      
        <Router>
            <Routes>
                <Route path="/" element={<StoreOwnerLoginForm />} />
                <Route path="/StoreOwnerDashboard" element={<h1>welcome home! </h1>} />
            </Routes>
        </Router>
    </>
  ) 
}

export default App
