import React, { Dimensions } from 'react-native';
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = {
  background: {
      width: ScreenWidth,
      height: ScreenHeight,
      flex: 1
  },
  backgroundShadow: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
};

export default styles;
