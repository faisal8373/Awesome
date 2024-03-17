/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
       <ElevatedCard />
       <FancyCard />
       <ContactList />
       <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
