import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: '',
      description: '',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;

export default App;
