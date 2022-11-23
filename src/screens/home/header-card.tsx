import type { Style } from 'nativewind/dist/style-sheet/runtime';
import * as React from 'react';

import { AnimView, Text } from '@/ui';

type props = { val: number; style?: Style };

export const HeaderCard = ({ val }: props): React.ReactElement => {
  return (
    <AnimView
      key={val}
      className="h-full w-[95%] self-center rounded-lg border-2 border-red-500 bg-blue-500"
    >
      <Text className="m-auto">{val}</Text>
    </AnimView>
  );
};
