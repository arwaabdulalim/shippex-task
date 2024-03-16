import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import StatusTag from '../statusTag/StatusTag';
import DashedLine from 'react-native-dashed-line';
import MainButton from '../mainButton/MainButton';
import colors from '../../themes/colors';

const ShipmentItem = ({ isCheck, toggleCheckedBox, item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { billType, trackingNum, fromCity, toCity, status } = item;
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderRightChild = () => {
    return (
      <Image
        source={require('../../assets/images/call.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  };
  const renderAnotherChild = () => {
    return (
      <Image
        source={require('../../assets/images/whatsapp.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  };
  return (
    <View>
      <View
        style={[
          styles.itemWrapper,
          isExpanded && {
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}>
        <TouchableOpacity
          onPress={toggleCheckedBox}
          style={[styles.checkedBox, isCheck ? styles.checkedBox : {}]}>
          <Image
            source={
              isCheck
                ? require('../../assets/images/checkedBox.png')
                : require('../../assets/images/checkBox.png')
            }
            resizeMode="contain"
            style={styles.checkBox}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/box.png')}
          resizeMode="contain"
          style={styles.box}
        />
        <View style={styles.detailsWrapper}>
          <Text style={styles.billType}>{billType}</Text>
          <Text style={styles.trackingNo}>{trackingNum}</Text>
          <View style={styles.destnationView}>
            <Text style={styles.destination}>{fromCity}</Text>
            <Image
              source={require('../../assets/images/arrow.png')}
              resizeMode="contain"
              style={styles.arrow}
            />
            <Text style={styles.destination}>{toCity}</Text>
          </View>
        </View>
        <StatusTag status={status} />
        <TouchableOpacity onPress={toggleExpand}>
          <Image
            source={
              isExpanded
                ? require('../../assets/images/tintedExpand.png')
                : require('../../assets/images/expand.png')
            }
            resizeMode="contain"
            style={styles.expandArrow}
          />
        </TouchableOpacity>
      </View>
      {isExpanded && (
        <DashedLine
          dashLength={5}
          dashGap={10}
          dashColor={colors.water}
          style={styles.dashedLine}
        />
      )}
      {isExpanded && (
        <>
          <View style={styles.expandedView}>
            <View style={styles.expandedContainer}>
              <View>
                <Text style={styles.origin}>Origin</Text>
                <Text style={styles.city}>Cairo</Text>
                <Text style={styles.address}>Dokki, 22 Nile St.</Text>
              </View>
              <Image
                source={require('../../assets/images/destArrow.png')}
                resizeMode="contain"
                style={styles.arrowIcon}
              />
              <View>
                <Text style={styles.origin}>Destination</Text>
                <Text style={styles.city}>Alexandria</Text>
                <Text style={styles.address}>Smoha, 22 max St.</Text>
              </View>
            </View>
            <View style={styles.btnsWrapper}>
              <MainButton
                variant="small"
                style={styles.btn}
                title="Call"
                rightChild={renderRightChild}
              />
              <MainButton
                variant="half"
                rightChild={renderAnotherChild}
                title="WhatsApp"
                style={styles.button}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ShipmentItem;
