import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './styles';
import HelloMsg from '../../components/helloMsg/HelloMsg';
import Search from '../../components/search/Search';
import Filters from '../../components/filters/Filters';
import ShipmentItem from '../../components/shipmentItem/ShipmentItem';
import FiltersBottomSheet from '../../components/filtersBottomSheet/FiltersBottomSheet';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useGetShipmentsList } from '../../hooks/useShipmentsApi';
import { shipmentData } from '../../services/data/shipmentData';
const Shipments = () => {
  const bottomSheetModalRef = useRef(null);

  const [checkedList, setCheckedList] = useState([]);
  const snapPoints = useMemo(() => ['35%', '50%'], []);

  const { isLoading, data: shipmentsList } = useGetShipmentsList({
    onSuccessHandler: () => {},
    onErrorHandler: () => {},
    enabled: true,
  });
  const shipmentItems = [
    { id: 1, name: 'Shipment 1' },
    { id: 2, name: 'Shipment 2' },
    { id: 3, name: 'Shipment 3' },
    { id: 4, name: 'Shipment 4' },
    { id: 5, name: 'Shipment 5' },
  ];
  const isChecked = checkedList?.length === shipmentItems?.length;
  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const toggleMarkAll = () => {
    if (isChecked) {
      return setCheckedList([]);
    }
    setCheckedList(shipmentItems);
  };

  const renderItem = ({ item }) => {
    const isCheck = checkedList?.find(
      selectedItem => selectedItem.id === item.id,
    );
    return (
      <View key={item.id} style={styles.item}>
        <ShipmentItem
          item={item}
          isCheck={isCheck}
          toggleCheckedBox={() => {
            if (isCheck) {
              const filterData = checkedList.filter(
                elements => elements.id !== item.id,
              );
              return setCheckedList(filterData);
            }
            setCheckedList([...checkedList, item]);
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HelloMsg />
      <Search />
      <Filters
        handleFilterPress={handlePresentModal}
        handleAddScanPress={handlePresentModal}
      />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Shipments</Text>
        <View style={styles.markView}>
          <TouchableOpacity onPress={toggleMarkAll}>
            <Image
              source={
                isChecked
                  ? require('../../assets/images/checkedBox.png')
                  : require('../../assets/images/checkBox.png')
              }
              resizeMode="contain"
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.markTxt}>Mark All</Text>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator color={'black'} size={'large'} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={shipmentData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          compon
        />
      )}

      <FiltersBottomSheet snapPoints={snapPoints} ref={bottomSheetModalRef} />
    </SafeAreaView>
  );
};

export default Shipments;
