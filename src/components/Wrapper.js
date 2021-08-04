/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import ScreenHeader from './ScreenHeader';
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../theme';

const Wrapper = ({
  navigation,
  children,
  headerDetails,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={0}
        style={{ flex: 1, backgroundColor: 'white' }}
        enabled>
        <ScreenHeader
          navigation={navigation}
          smallTitle={headerDetails.smallTitle}
          bigTitle={headerDetails.bigTitle}
          icon={headerDetails.iconName}
        />
        <View style={{ flex: 1 }}>
          <ScrollView>{children}</ScrollView>
        </View>
      </KeyboardAvoidingView>


    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  BottomTabStyles: {
    width: wp('80%'),
    backgroundColor: colors.mildBlue,
    flexDirection: 'row',
    padding: hp('1.5%'),
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  footer: {
    flex: 0.2,
    position: 'relative',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
