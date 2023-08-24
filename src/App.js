import { Button } from '@chakra-ui/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Headders } from './component/Headders';
import Home from './component/Home';
import Footer from './component/Footer';
import Videos from './component/Videos';
import Upload from './component/Upload.jsx';
import SignUp from './component/SignUp';
import SingIn from './component/SingIn';

function App() {
  return (
    <>
      <Router>
        <Headders />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
