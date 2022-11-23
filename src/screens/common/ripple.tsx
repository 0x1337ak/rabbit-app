import * as React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { AnimView } from '@/ui';

type Props = { value: Number };

export const Ripple = ({ value }: Props) => {
  const radius = useSharedValue(0);
  const ripple = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: withDelay(
            0,
            withTiming(value > 0 ? radius.value : 0, { duration: 300 })
          ),
        },
        {
          scaleY: withDelay(
            0,
            withTiming(value > 0 ? radius.value : 0, { duration: 300 })
          ),
        },
      ],
    };
  }, [value]);

  const onLayout = (event: LayoutChangeEvent) => {
    let layout = event.nativeEvent.layout;
    radius.value = Math.sqrt(layout.height ** 2 + layout.width ** 2) * 2;
  };

  return (
    <AnimView
      onLayout={onLayout}
      className="absolute bottom-0 right-0  h-full w-full"
    >
      <AnimView
        className="absolute bottom-0 right-0 -z-50 h-[1] w-[1] rounded-full bg-[#FFC801]"
        style={ripple}
      />
    </AnimView>
  );
};
