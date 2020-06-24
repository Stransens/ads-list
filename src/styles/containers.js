import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const containers = StyleSheet.create({
      mainContainer: {
            backgroundColor: '#99ccff',
            flex: 1,
            paddingBottom: 20,
      },
      emptyContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
      }
});
