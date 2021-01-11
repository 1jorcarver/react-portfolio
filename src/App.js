import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from  './components/Resume';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('Projects');

  function displaySection(page) {
    switch (page) {
      case 'About':
        return <About />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <Projects />;
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className='body'>
        {displaySection(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
