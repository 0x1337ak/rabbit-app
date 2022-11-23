import * as React from 'react';

import { Text, View } from '@/ui';

import { Category } from './category';

type Props = {};

export const Categories = ({}: Props) => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <View className="mt-2 h-fit w-full  flex-1">
      <View className="h-10 flex-1 ">
        <Text>Categories</Text>
      </View>

      <View className="m-auto flex h-fit flex-row   flex-wrap overflow-y-auto bg-blue-600 pl-3 ">
        {data.map((item) => {
          return <Category id={item} key={item} />;
        })}
      </View>
    </View>
  );
};
