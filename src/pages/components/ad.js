import React from 'react';
import {Text, View, TouchableOpacity, Image} from "react-native";
import moment from 'moment';
import {itemCard} from "../../styles";

function Ad({item, onPress}) {
      return (
          <TouchableOpacity onPress={onPress} style={{width: '50%', padding: 10}}>
                <View style={{borderWidth: 1, borderColor: '#000'}}>
                      <Image source={{uri: item.photo}} style={{
                            width: '100%',
                            height: 100,
                      }}/>
                      <View style={itemCard.priceWrapper}>
                            <Text style={itemCard.price}>{item.price} {item.currency}</Text>
                      </View>
                      <View style={itemCard.nameWrapper}>
                        <Text style={itemCard.name}>{item.name}</Text>
                      </View>
                      <View style={itemCard.line}>
                            <Text>{item.region.name}</Text>
                            <Text>{moment(item.updated_at).format('DD MMMM YYYY')}</Text>
                      </View>
                </View>
          </TouchableOpacity>
      )
}

export default Ad;
