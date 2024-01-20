import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const CarOutline = ({imageSource}) => {
  return (
    

    
        <View style={styles.imageArea}>
            <Image source={imageSource} resizeMode='contain' style={styles.carImage} />

        </View>
   
    
  )
}

export default CarOutline

const styles = StyleSheet.create({
    
   
     imageArea:{
        flex:1
     },
    
})