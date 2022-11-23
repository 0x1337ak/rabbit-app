import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import { Path } from 'react-native-svg';
import Svg from 'react-native-svg';

export const Minus = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width={20} height={24} viewBox="0 0 48  48" fill="none" {...props}>
    <Path d="M10 25.5v-3h28v3Z" fill={color} />
  </Svg>
);
