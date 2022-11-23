import type { ReactNode } from 'react';
import React from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimView, Minus, PlusThin, Pressable, Text, Trash, View } from '@/ui';
import colors from '@/ui/theme/colors';
interface Props {
  callBack: React.Dispatch<React.SetStateAction<number>>;
  value: Number & ReactNode;
}

export function ProductBasket({ callBack, value = 1 }: Props) {
  const widthSharedVal = useSharedValue(value ? '100%' : '33%');
  const progress = useSharedValue(0);

  const widthAnimated = useAnimatedStyle(() => {
    widthSharedVal.value = value ? '100%' : '33%';

    return {
      width: withTiming(widthSharedVal.value, { duration: 150 }),
      backgroundColor: withTiming(
        value ? colors.appLightPrimary : colors.appPrimary
      ),
    };
  }, [value]);

  const bgWidthAnimated = useAnimatedStyle(() => {
    progress.value = withTiming(value ? 1 : 0, { duration: 300 });
    widthSharedVal.value = withTiming(value > 0 ? '100%' : '33%');
    const bgColors = interpolateColor(
      progress.value,
      [0, 1],
      [colors.transparent, colors.appPrimary]
    );
    return {
      width: widthSharedVal.value,
      backgroundColor: bgColors,
    };
  }, [value]);

  return (
    <View className="m-1">
      <AnimView
        className="absolute bottom-1 right-0  h-10  "
        style={bgWidthAnimated}
      />
      <AnimView
        className="absolute bottom-1 right-0  h-10  w-full justify-end overflow-hidden rounded-3xl"
        style={widthAnimated}
      >
        <View className="absolute bottom-0 right-0 z-50 flex h-10 w-32 flex-row  items-center   px-1">
          <View className="ml-1 h-7 w-8 rounded-full">
            <Pressable
              className="h-full max-w-full"
              onPress={() => callBack((prev) => prev - 1)}
            >
              <View className="m-auto">
                {value === 1 ? <Trash color="#333" /> : <Minus color="#333" />}
              </View>
            </Pressable>
          </View>
          <View className="h-full flex-1">
            <Text className="m-auto">{value}</Text>
          </View>
          <View className="h-7 w-8 rounded-full  ">
            <Pressable
              className="h-full w-full"
              onPress={() => callBack((prev) => prev + 1)}
            >
              <View className="m-auto">
                <PlusThin color="#333" />
              </View>
            </Pressable>
          </View>
        </View>
      </AnimView>
    </View>
  );
}
