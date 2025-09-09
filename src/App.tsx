import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import './styles/global.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="App">
      {/* Top navigation bar */}
      <Navbar />

      <div className="layout">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main content */}
        <main className="main-content">
          <BookAppointment />
        </main>
      </div>
    </div>
  );
}

export default App;
