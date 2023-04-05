import * as React from 'react';
import { View, useWindowDimensions, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';
import FirstPage from './FirstPage';
import List from './List';

const FirstRoute = () => <FirstPage />;

const SecondRoute = () => <List />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>

      </GestureHandlerRootView> */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}
