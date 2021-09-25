import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import theme from '../config/theme';

export default function AddOn() {
  return (
    <NativeBaseProvider theme={theme}>
      <div>
        <p>Payment Screen</p>
      </div>
    </NativeBaseProvider>
  );
}
