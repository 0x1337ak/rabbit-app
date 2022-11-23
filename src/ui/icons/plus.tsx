import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';

export const Plus = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48  48" fill="none" {...props}>
    <Path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" fill={color} />
  </Svg>
);
