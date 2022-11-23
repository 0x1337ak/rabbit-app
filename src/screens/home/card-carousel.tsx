import * as React from 'react';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import { AnimView, View } from '@/ui';
import colors from '@/ui/theme/colors';

import { HeaderCard } from './header-card';
export const CardCarousel = () => {
  const data = React.useMemo(() => [1, 2, 3, 4], []);
  const [width, SetWidth] = useState(100);
  const progressValue = useSharedValue<number>(0);
  const r = React.useRef(null);

  React.useEffect(() => {
    SetWidth(Dimensions.get('screen').width - 20);
  }, []);

  return (
    <View className="flex h-44 flex-1 items-center justify-center  p-1">
      <Carousel
        ref={r}
        autoPlay
        height={160}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        width={width}
        data={data}
        pagingEnabled={true}
        autoPlayInterval={2000}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={(item) => {
          return <HeaderCard val={item.item} />;
        }}
      />
      <View className="flex flex-row ">
        {data.map((_, index) => {
          return (
            <PaginationItem
              backgroundColor={colors.appPrimary}
              animValue={progressValue}
              index={index}
              key={index}
              isRotate={false}
              length={data.length}
            />
          );
        })}
      </View>
    </View>
  );
};

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: SharedValue<number>;
  isRotate?: boolean;
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      className="m-1 overflow-hidden rounded-full bg-appGray"
      style={{
        width,
        height: width,
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}
    >
      <AnimView
        className={'flex-1 rounded-[50]'}
        style={[{ backgroundColor }, animStyle]}
      />
    </View>
  );
};
