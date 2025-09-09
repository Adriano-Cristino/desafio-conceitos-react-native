// Jest setup file for React Native testing
import React from 'react';
import '@testing-library/react-native/extend-expect';

/* global jest */
// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const {View} = require('react-native');
  return {
    SafeAreaProvider: ({children}) => children,
    SafeAreaView: ({children, style}) => (
      <View style={style}>{children}</View>
    ),
    useSafeAreaInsets: () => ({top: 0, bottom: 0, left: 0, right: 0}),
  };
});
