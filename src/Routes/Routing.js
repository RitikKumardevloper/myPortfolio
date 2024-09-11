import { Routes, Route } from 'react-router-dom';
import Homes from '../Pages/Homes';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
}

export default Routing;
