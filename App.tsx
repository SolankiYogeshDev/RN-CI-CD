import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const App = () => {
  const [maxScale, setMaxScale] = useState(1);
  const {width: W, height: H} = Dimensions.get('window');

  return (
    <View style={styles.parentView}>
      <View
        onLayout={l => {
          const {height, width} = l.nativeEvent.layout;
          if (height && width) {
            const scaleX = W / width;
            const scaleY = H / height;
            setMaxScale(Math.max(scaleX, scaleY));
          }
        }}
        style={[
          styles.childView,
          {
            transform: [{scale: maxScale}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childView: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    // Style your child view as needed
  },
});

export default App;
