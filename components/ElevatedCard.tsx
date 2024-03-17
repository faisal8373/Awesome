import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style= {[styles.card, styles.cardOne]}>
          <Text>
            Red
          </Text>
        </View>
        <View style= {[styles.card, styles.cardTwo]}>
          <Text>
          Green
          </Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
          <Text>
             Blue
          </Text>
        </View>
        <View style= {[styles.card, styles.cardFour]}>
          <Text>
            Grey
          </Text>
        </View>
        <View style= {[styles.card, styles.cardFive]}>
          <Text>
          Pink
          </Text>
        </View>
      </ScrollView>

    </View>
  )
}

export default ElevatedCard;

const styles = StyleSheet.create({
headingText: {  
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'blue',
},
container: {    
flex: 1,
flexDirection: 'row',
},
card: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    shadowOffset:{  width: 1,  height: 1,  },
shadowColor: 'red',
},
cardOne: { 
    backgroundColor: '#EF5354',
    
 },
 cardTwo: { 
    backgroundColor: '#50DBB4',
    
 },
 cardThree: { 
    backgroundColor: '#5DA3FA',
    
 },
 cardFive: { 
  backgroundColor: 'pink',
  
},
cardFour: { 
  backgroundColor: '#9E9E9E',
  
},
})