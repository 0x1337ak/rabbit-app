import { FlashList } from '@shopify/flash-list';
import * as React from 'react';

import { ArrowRight, EmptyList, Pressable, Text, View } from '@/ui';

import { Product } from './product';

export const Offers = () => {
  const list: number[] = [1, 2, 3, 4, 5, 6, 7];

  const renderItem = React.useCallback(() => <Product />, []);

  return (
    <View className="p-1">
      <View className="mb-2 flex flex-row justify-between p-1">
        <Text className="p-1 text-lg">Offers 🔥</Text>
        <View className="h-10 rounded-2xl bg-white p-2">
          <Pressable
            className="h-full w-full"
            onPress={() => console.log('hi')}
          >
            <Text>see All {<ArrowRight color="#333" />}</Text>
          </Pressable>
        </View>
      </View>
      <FlashList
        renderItem={renderItem}
        data={list}
        estimatedItemSize={300}
        keyExtractor={(_, index) => `item-${index}`}
        horizontal={true}
        ListEmptyComponent={<EmptyList isLoading={false} />}
        scrollEnabled={true}
      />
    </View>
  );
};
