import Svg, { Path } from 'react-native-svg';

import { colors } from '@utils/colors';
import { commonValues } from '@utils/commonValues';

export const PressureIcon = () => (
  <Svg fill="none" height={commonValues.SIZE_32} width={commonValues.SIZE_32}>
    <Path
      d="M16 2.667a4.333 4.333 0 0 1 4.327 4.086l.006.247.002 10.603.106.092a6.653 6.653 0 0 1 2.192 4.297l.026.336.008.339A6.666 6.666 0 1 1 11.32 17.92l.24-.227.105-.09L11.667 7a4.334 4.334 0 0 1 3.845-4.307l.243-.02.245-.006Zm0 2a2.333 2.333 0 0 0-2.325 2.142L13.667 7v11.592l-.412.3a4.666 4.666 0 1 0 5.71.17l-.22-.169-.409-.3L18.333 7A2.333 2.333 0 0 0 16 4.667Zm0 6a1 1 0 0 1 1 1v7.82a3.335 3.335 0 1 1-2 0v-7.82a1 1 0 0 1 1-1Z"
      fill={colors.WHITE}
    />
  </Svg>
);
