import React, { forwardRef, useRef, useCallback, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import styles from './styles';
import colors from '../../themes/colors';
import FilterItem from '../filterItem/FilterItem';
const FiltersBottomSheet = forwardRef((props, ref) => {
  const { snapPoints, onChange } = props;

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (onChange) onChange(index);
    },
    [onChange],
  );

  const filterItems = [
    { id: '1', label: 'Received' },
    { id: '2', label: 'Putaway' },
    { id: '3', label: 'Delivered' },
    { id: '4', label: 'Canceled' },
    { id: '5', label: 'Rejected' },
    { id: '6', label: 'Lost' },
    { id: '7', label: 'On Hold' },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCancel = useCallback(() => {
    setSelectedFilters([]);

    if (ref.current) {
      ref.current.close();
    }
  }, [ref]);

  const toggleFilter = useCallback(id => {
    setSelectedFilters(current => {
      const updatedFilters = current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id];
      return updatedFilters;
    });
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheetModal
        handleIndicatorStyle={styles.handleIndicator}
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelDoneBtn}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.filterTxt}>Filters</Text>
          <TouchableOpacity>
            <Text style={styles.cancelDoneBtn}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <Text style={styles.statusTxt}>SHIPMENT STATUS</Text>
        <FlatList
          data={filterItems}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FilterItem
              filter={item.label}
              isSelected={selectedFilters.includes(item.id)}
              onToggle={() => toggleFilter(item.id)}
            />
          )}
          contentContainerStyle={styles.filtersWrapper}
        />
      </BottomSheetModal>
    </View>
  );
});

export default FiltersBottomSheet;
