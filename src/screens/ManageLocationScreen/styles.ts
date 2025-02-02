import { StyleSheet } from 'react-native';

import { commonValues } from '@utils/commonValues';

export const styles = StyleSheet.create({
  container: {
    flex: commonValues.FLEX_1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassEffect: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: commonValues.BORDER_RADIUS_16,
  },
});
