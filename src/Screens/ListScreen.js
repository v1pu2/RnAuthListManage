import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {deleteItem, getItems} from '../Actions/ActionItem';
import ItemCard from '../Component/ItemCard';
import {useDispatch} from 'react-redux';

const ListScreen = props => {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    props.getItems();
  }, []);

  useEffect(() => {
    setItemData(props?.items);
  }, [props.items]);

  const onDelete = id => {
    if (props.items?.length === 1) {
      dispatch(deleteItem(id));
      navigation.goBack();
    } else {
      dispatch(deleteItem(id));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.headerView}>
          <Text style={styles.txtTitle}>Items</Text>
        </View>
        {itemData && itemData?.length > 0 ? (
          <FlatList
            data={itemData}
            keyExtractor={item => item?.id.toString()}
            renderItem={({item}) => (
              <ItemCard item={item} onDelete={onDelete} />
            )}
            style={styles.containerInner}
          />
        ) : (
          <View style={styles.noitemsView}>
            <Text style={styles.txtTitle}>No items added</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    items: state?.ListReducer?.items,
  };
};
const mapDispatchToProps = {
  getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerView: {padding: 20},
  headerView: {justifyContent: 'center', alignItems: 'center'},
  noitemsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  containerInner: {
    width: '100%',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 20,
    color: '#041115',
  },
});
