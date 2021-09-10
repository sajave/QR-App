import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './Views/Main/Main'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}