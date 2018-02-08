import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            style={styles.thumbnailStyle} 
            source={{ uri: thumbnail_image }} 
          />
        </View>

        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image 
          style={styles.imageStyle} 
          source={{ uri: image }} 
        />
      </CardSection>

      <CardSection>
        <Button buttonText={'Click me!'} onPress={() => Linking.openURL(url)} />
      </CardSection>  
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 75,
    width: 75
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;