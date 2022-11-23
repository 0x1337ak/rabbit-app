import 'react-native-gesture-handler';

import React from 'react';

import { ScrollView } from '@/ui';

import { CardCarousel, Offers } from './screens';
import { Categories } from './screens/home/categories';

const App = () => {
  return (
    <ScrollView>
      <CardCarousel />
      <Offers />
      <Categories />
    </ScrollView>
  );
};

export default App;
