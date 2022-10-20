import React from 'react';
import { Appbar } from 'react-native-paper';

export const HeaderComponent = ({title = ''}) => {
  return (
    <Appbar>
      <Appbar.BackAction />
      {/* <Appbar.BackAction onPress={() => {}} /> */}
      <Appbar.Content title={title} />
    </Appbar>
  );
};
