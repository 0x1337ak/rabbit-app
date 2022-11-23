import React, { useState } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { AnimView, Image, Text, View } from '@/ui';

import { Ripple } from '../common';
import { ProductBasket } from './product-basket';

export const Product = () => {
  const [count, setCount] = useState(0);

  const slide = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(count > 0 ? -45 : 0) }],
      opacity: withTiming(count > 0 ? 1 : 0),
    };
  }, [count]);

  return (
    <View className="m-1 flex  w-32  overflow-hidden rounded-xl bg-gray-100">
      <View className="absolute top-0 left-0 z-10 m-1 flex w-full flex-row justify-around p-2">
        <Text className="rounded-lg bg-orange-600 p-1 text-sm text-white">
          -25%
        </Text>
        <Text className="rounded-lg bg-purple-800 p-1 text-sm text-white">
          vegan
        </Text>
      </View>
      <Ripple value={count} />
      <View className="m-auto  mt-1 h-32 w-28">
        <Image
          resizeMode="contain"
          className="h-full w-full"
          source={{
            uri: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/419075/1.jpg?6969',
          }}
        />
      </View>

      <View
        className="w-full p-1 overflow-hidden h-14"
        style={count ? { width: '80%' } : {}}
      >
        <Text className="text-ellipsis">Product Name</Text>
        <Text className="text-sm text-gray-400">180 g</Text>
      </View>

      <View className="m-1 mb-0 flex-auto">
        <View className="flex flex-row rounded-xl">
          <View className="flex-1 ">
            <Text className="text-xs text-red-700 line-through">1.70$</Text>
            <Text>1.27$</Text>
          </View>
        </View>
      </View>
      <AnimView className="absolute bottom-1 right-1 h-10" style={slide}>
        <View className="flex-1 ">
          <Text className="text-xs text-red-700 line-through">1.70$</Text>
          <Text>1.27$</Text>
        </View>
      </AnimView>
      <ProductBasket callBack={setCount} value={count} />
    </View>
  );
};
