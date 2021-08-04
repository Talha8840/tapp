/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenHeader = ({ navigation, smallTitle, bigTitle, icon }) => {
  return (
    <View
      style={styles.headerContainer}>
      <View style={styles.header}>
        <BackIcon
          name="chevron-back"
          size={30}
          color="white"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View >
            <Text style={styles.textOne}>{smallTitle.toUpperCase()}</Text>
          </View>

        </View>
        <MaterialIcon
          name="menu"
          size={30}
          color="white"
          style={{ marginRight: 10 }}
          onPress={() => console.log("alert")}
        />
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    zIndex: 1,

  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.dynamicBackground,
  },
  backBtn: {
    marginTop: 25,
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
    marginLeft: 20,
    // width: 45,
    // height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradientText: {
    color: '#03e3fc',
    fontSize: hp('3%'),
    marginLeft: 10,
    padding: 25,
    fontFamily: 'Montserrat-Medium',
  },
  textOne: {
    fontSize: hp('2.5%'),
    color: colors.white,
  },
  textTwo: {
    fontWeight: 'bold',
    fontSize: hp('4%'),
    color: colors.white,
  },
});
