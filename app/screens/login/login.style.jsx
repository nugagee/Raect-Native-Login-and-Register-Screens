import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(101, 37, 131)',
  },
  view: {
    width: '80%',
  },
  cardTitle: {
    color: 'red',
    // color: 'rgba(101, 37, 131)',
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
});
