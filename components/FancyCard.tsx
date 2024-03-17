import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
<Text style={styles.cardTitle}>Hawa Mahal</Text>
<Text style={styles.cardLabel}>Pink City, Jaipur</Text>
<Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
<Text style={styles.cardFooter}>12 mins away</Text>

        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 10,
  width: 360,
  height: 370,
  },
  cardElevated: {
    elevation: 10,
    shadowOffset: {width: 1, height: 1},
  },
cardImage:{
    height: 200,
    borderRadius: 10,
},
cardBody:{
    padding: 10,
},
cardTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
},
cardLabel:{
    fontSize: 18,
    color: 'grey',
    marginBottom: 5,
    textAlign: 'right',
},
cardDescription:{
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    textAlign: 'justify',
    padding: 5,
},
cardFooter:{
    fontSize: 12,
    color: 'blue',
    textAlign: 'right',
    fontWeight: 'bold',
    paddingBottom: 5,
},

});
