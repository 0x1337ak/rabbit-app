import * as React from 'react';

import { Image, Text, View } from '@/ui';

type Props = { id: number };
export const Category = ({ id }: Props) => {
  return (
    <View className="m-1 w-[30%] overflow-hidden  rounded-lg bg-gray-200">
      <View className="h-14  p-1">
        <Text className="text-base">Category {id}</Text>
      </View>
      <View className=" flex h-28 w-full flex-row-reverse items-end justify-end  pr-2">
        <Image
          className="h-full w-full"
          source={{
            uri: 'https://ma.jumia.is/unsafe/fit-in/500x500/product/03/419075/1.jpg?6969',
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
