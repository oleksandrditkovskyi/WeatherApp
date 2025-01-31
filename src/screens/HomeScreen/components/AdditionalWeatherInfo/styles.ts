import { StyleSheet } from 'react-native';

import { commonValues } from '@utils/commonValues';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoWrap: {
    gap: commonValues.SIZE_24,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
