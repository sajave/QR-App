import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './Views/Main/Main'
import store from '../redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    </>
  );
}