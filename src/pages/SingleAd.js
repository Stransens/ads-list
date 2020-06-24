import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions, Linking, ScrollView} from "react-native";
import {containers, items} from "../styles";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import moment from "moment";

function SingleAd({route, navigation}) {
      const [activeIndex, setActiveIndex] = useState(0)

      React.useLayoutEffect(() => {
            navigation.setOptions({
                  title: route.params.item.name,
                  headerBackTitle: null,
                  headerBackColor: '#000'
            });
      }, [navigation]);

      function renderItem({item, index}) {
            return (
                <Image source={{uri: item}} style={{
                      width: '100%',
                      height: 300,
                }}/>
            );
      }

      let {item} = route.params
      return (
          <View style={containers.mainContainer}>
                <Carousel
                    data={item.photos}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width - 20}
                    itemWidth={300}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
                <Pagination
                    dotsLength={item.photos.length}
                    activeDotIndex={activeIndex}
                    containerStyle={{}}
                    dotStyle={{
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          marginHorizontal: 1,
                          backgroundColor: '#003366'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <ScrollView>
                      <View style={items.priceWrapper}>
                            <Text style={items.price}>{item.price} {item.currency}</Text>
                      </View>
                      <View style={items.nameWrapper}>
                            <Text style={items.name}>{item.name}</Text>
                      </View>
                      <View style={items.line}>
                            <Text>{item.region.name}</Text>
                            <Text>{moment(item.updated_at).format('DD MMMM YYYY')}</Text>
                      </View>
                      <Text style={items.description}>{item.description}</Text>
                      <Text style={items.author}>{item.contact.name}</Text>
                      <View style={items.phonesBlock}>
                            {item.contact.phones.map((item, i) => <TouchableOpacity key={i} style={items.phoneWrapper}
                                                                                    onPress={() => Linking.openURL(`tel:${item}`)}><Text
                                style={items.phone}>{item}</Text></TouchableOpacity>)}
                      </View>
                </ScrollView>
          </View>
      )
}

export default SingleAd;
