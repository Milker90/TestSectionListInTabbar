import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

// https://juejin.cn/post/7219365179573600311
function randomInRange(from, to) {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
}

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

const DATA = [];
for (let i = 0; i < 36; i++) {
  const month = [];
  for (let j = 1; j <= 12; j++) {
    const vaule1 = randomInRange(100, 1000);
    const vaule2 = randomInRange(1000, 10000);
    const vaule3 = randomInRange(10000, 100000);
    month.push([vaule1, vaule2, vaule3]);
  }
  DATA.push({
    title: `Year ${i}`,
    data: month,
  });
}

const Item = ({ item, index }) => {
  return (
    <View style={styles.item} pointerEvents="none">
      <Text style={styles.title}>{index}</Text>
      <Text style={styles.title}>{item[0]}</Text>
      <Text style={styles.title}>{item[1]}</Text>
      <Text style={styles.title}>{item[2]}</Text>
    </View>
  );
};

const List = () => (
  <View>
    <View style={{ height: 120 }}>
      <Text>AAAAA</Text>
    </View>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => <Item item={item} index={index} />}
      initialNumToRender={24}
      maxToRenderPerBatch={48}
      windowSize={21}
      stickySectionHeadersEnabled
      CellRendererComponent={props => <View {...props} pointerEvents="none" />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  item: {
    height: 38,
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'gray',
  },
  headerText: {
    fontSize: 16,
    lineHeight: 38,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    flex: 1,
  },
});

export default List;
