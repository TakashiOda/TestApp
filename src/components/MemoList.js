import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList,
} from 'react-native';

// const { memoList } = this.props.state;
// const data = memoList;

// function Item({ body }) {
//   return (
//     // <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
//     <TouchableHighlight>
//       <View style={styles.memoListItem}>
//         <Text style={styles.memoTitle}>{body}</Text>
//         <Text style={styles.memoDate}>2020/20/21</Text>
//       </View>
//     </TouchableHighlight>
//   );
// }

class MemoList extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2020/04/10</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    // console.log(this.props.memoList);
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
    // paddingTop: 78,
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
