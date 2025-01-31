import Svg, { Path } from 'react-native-svg';

export const HumidityIcon = () => (
  <Svg fill="none" height={32} width={32}>
    <Path
      d="M25 20c0 5.523-3.477 9-9 9s-9-3.477-9-9c0-5.927 6.452-13.928 8.43-16.242a.75.75 0 0 1 1.14 0C18.548 6.072 25 14.073 25 20Z"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <Path
      d="M21.5 20.5A4.5 4.5 0 0 1 17 25"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
