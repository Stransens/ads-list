import {Dimensions, StyleSheet} from 'react-native';

export const itemCard = StyleSheet.create({
      priceWrapper: {
            backgroundColor: '#000',
            alignItems: 'center',
            padding: 5,
      },
      nameWrapper: {
            alignItems: 'center',
            padding: 5,
      },
      name: {
            fontSize: 16,
      },
      price: {
            color: '#fff'
      },
      line: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
      },
});

export const items = StyleSheet.create({
      priceWrapper: {
            backgroundColor: '#000',
            alignItems: 'center',
            padding: 10,
      },
      price: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
      },
      nameWrapper: {
            alignItems: 'center',
            padding: 10,
      },
      name: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold'
      },
      description: {
            padding: 10,
      },
      line: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
      },
      author: {
            padding: 10,
            fontSize: 16,
            fontWeight: 'bold'
      },
      phonesBlock: {
            paddingHorizontal: 20,
      },
      phoneWrapper: {
            padding: 10,
            borderWidth: 1,
            borderColor: '#003366',
            marginBottom: 2,
      },
      phone: {
            fontSize: 16,
            fontWeight: 'bold'
      },
});
