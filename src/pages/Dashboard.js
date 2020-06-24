import React, {Component} from 'react';
import {Text, View, FlatList, ScrollView, SectionList, ActivityIndicator} from "react-native";
import {connect} from 'react-redux';
import {getAds} from "../actions/actions";
import Ad from "./components/ad";
import {dashboard, containers} from "../styles";
import {SafeAreaView} from "react-native-safe-area-context";

class Dashboard extends Component {
      constructor(props) {
            super(props);
            this.onEndReachedCalledDuringMomentum = true;
      }

      componentDidMount() {
            this.props.getAds();
      }

      _renderItem = ({section, index}) => {
            if (index % 2 !== 0) return null;
            const items = [];
            for (let i = index; i < index + 2; i++) {
                  if (i >= section.data.length) {
                        break;
                  }
                  items.push(<Ad item={section.data[i]}
                                 onPress={() => this.props.navigation.navigate('SingleAd', {item: section.data[i]})}/>);
            }

            return (
                <View
                    style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                    }}>
                      {items}
                </View>
            );
      };

      handleLoadMore = () => {
            if (!this.onEndReachedCalledDuringMomentum) {
                  this.props.getAds(this.props.ads.cursor)
            }
      };

      render() {
            let {vips, ads, loader, error} = this.props.ads

            if (loader) {
                  return (
                      <View style={containers.emptyContainer}>
                            <ActivityIndicator />
                      </View>
                  )

            }

            if (error) {
                  return (
                      <View style={containers.emptyContainer}>
                            <View style={dashboard.errorContainer}>
                                  <Text style={dashboard.errorText}>{error}</Text>
                            </View>
                      </View>
                  )

            }

            return (
                <SafeAreaView style={{flex: 1}}>
                      <View style={containers.mainContainer}>
                            <SectionList
                                sections={[
                                      {
                                            title: 'VIP',
                                            data: vips,
                                      },
                                      {
                                            title: 'SON',
                                            data: ads,
                                      },

                                ]}
                                renderItem={this._renderItem}
                                renderSectionHeader={({section}) => (
                                    <View style={dashboard.tab}>
                                          <Text style={dashboard.tabText}>{section.title}</Text>
                                    </View>
                                )}
                                keyExtractor={(item, i) => i}
                                onEndReached={this.handleLoadMore.bind(this)}
                                onEndReachedThreshold={0.5}
                                onMomentumScrollBegin={() => {
                                      this.onEndReachedCalledDuringMomentum = false;
                                }}
                            />
                      </View>
                </SafeAreaView>
            )
      }

}

export default connect(state => ({
          ads: state.items,
    }),
    {
          getAds
    })(Dashboard);
