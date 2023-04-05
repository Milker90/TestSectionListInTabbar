import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { PanGestureHandler } from 'react-native-gesture-handler';

const FirstPage = () => {
  const [value, setValue] = useState(0);
  const onValueChange = useCallback(v => {
    if (v instanceof Array) {
      setValue(v[0]);
    } else {
      setValue(v);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <View style={{ height: 20 }} />
      <PanGestureHandler onGestureEvent={() => { }}>
        <Slider value={value} onValueChange={onValueChange} />
      </PanGestureHandler>
      <Text>Value: {value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default FirstPage;
