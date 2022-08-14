import React from 'react';

import Slider from 'Pages/Slider/Slider';

import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <div className="w-screen h-screen p-3 flex justify-center bg-[#F5F5F5]">
        <Slider />
      </div>
    </Providers>
  );
};

export default App;
