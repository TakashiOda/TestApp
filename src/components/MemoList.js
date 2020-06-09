import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList,
} from 'react-native';

class MemoList extends React.Component {
  renderMemo({ item }) {
    // const date = item.createdOn;
    // console.log('*********************');
    // console.log(item);
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail', { memo: { body: item.body, createdOn: item.createdOn, key: item.key } }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{String(item.body).substring(0, 15)}</Text>
          <Text style={styles.memoDate}>{item.createdOn.toDate().toISOString().split('T')[0]}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
