import * as React from 'react';

import Footer from '../components/Footer';
import Like from '../components/Home/Like/Like';
import Listen from '../components/Home/Listen/Listen';
import MixTape from '../components/Home/MixTape/MixTape';
import Today from '../components/Home/Today/Today';

const HomeScreen = () => {
  return (
    <>
      <Today />
      <MixTape />
      <Like />
      <Listen />
      <Footer />
    </>
  );
};

export default HomeScreen;
