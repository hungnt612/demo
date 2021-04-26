import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  a,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: '1',
    title:
      'LAPTOP ACER NITRO 5 AN515-56-79U2 GTX 1650 4GB INTEL CORE I7 11370H 8GB 512GB 15.6 FHD IPS 144HZ MULTICOLOR WIN 10\n',
    price: '24.490.000₫',
    img: 'https://xgear.vn/wp-content/uploads/2021/04/an515-56-05-568x568.jpg',
  },
  {
    id: '2',
    title: 'Màn hình cong Samsung LC49J890 49″ DFHD 144Hz USB-C',
    price: '21.490.000₫',
    img:
      'https://xgear.vn/wp-content/uploads/2018/04/vn-curved-gaming-c49j890dke-lc49j890dkexxv-frontblack-95180924_compressed-568x568.jpg',
  },
  {
    id: '3',
    title: 'Màn hình cong Cooler Master GM27-CF 27″ VA 165Hz FullHD',
    price: '5.490.000₫',
    img:
      'https://xgear.vn/wp-content/uploads/2020/03/GM27-CF_1_compressed-568x568.jpg',
  },
  {
    id: '4',
    title: 'Màn Hình ASUS VG248QG 24″ FullHD 165Hz 0.5ms G-sync Compatible',
    price: '5.890.000₫',
    img:
      'https://xgear.vn/wp-content/uploads/2019/08/VG258QR_thumb_b_compressed.jpg',
  },
  {
    id: '5',
    title: 'Màn hình Samsung LF24T350FHEXXV 24″ IPS 75Hz Full viền',
    price: '3.290.000₫',
    img:
      'https://xgear.vn/wp-content/uploads/2020/08/LF27T350_compressed-568x568.jpg',
  },
  {
    id: '6',
    title: 'Màn hình cong Samsung LC24RG50FQEXXV 24″ FHD 144Hz Freesync',
    price: '4.590.000₫',
    img:
      'https://xgear.vn/wp-content/uploads/2019/07/LC24RG50_1_compressed-1-568x568.jpg',
  },
];



const Item = ({title, price, img}) => (
  <TouchableOpacity onPress={
    () => Alert.alert(
      title,
      price,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    )
  }>
    <View style={styles.itemContainer}>
      <Image source={{uri: img}} style={styles.imgContainer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const renderItem = ({item}) => (
  <Item title={item.title} price={item.price} img={item.img} />
);

const {width, height} = Dimensions.get('window');
const ListProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'column',
    //backgroundColor: 'red',
    width: width * 0.45,
    height: 260,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 20,
  },
  imgContainer: {
    width: '100%',
    height: '60%',
    resizeMode: 'center',
    borderRadius: 20,
    //backgroundColor:'blue',
  },
  titleContainer: {
    //backgroundColor: 'green',
    height: '20%',
    width: '85%',
    marginVertical: 8,
  },
  priceContainer: {
    //backgroundColor: 'pink',
    height: '10%',
    width: '85%',
  },
  title: {
    fontSize: 18,
    width: '100%',
  },
  price: {
    fontSize: 16,
    color:'red',
    fontWeight:'600',
  },
});

export default ListProduct;
