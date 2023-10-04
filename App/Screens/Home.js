import { View, Text ,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'


export default  Home = () => {
    const [aktif, setAktif]=useState(0)
    const list = [

        { name:'Burak',
          id:1        
    },
    {
           name:'Ali Fırat',
           id:2
    },
    {
            name:'Resul',
            id:3,

    },
      
    ]
  const a =(id)=>{
            setAktif(id)
        }



  return (
    <View style={styles.Ort}> 
        <FlatList
        
        data={list}

        renderItem={({item}) => (

            <TouchableOpacity onPress={() => a(item.id)}>
                <Text style={item.id==aktif?styles.Secilmis:styles.secilmemis}> {item.name}</Text>
            </TouchableOpacity>


        

        )}

     />
  
    <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
   
    
    Secilmis:{
        color:'red',
        fontWeight: 'bold',
        fontSize:25,
    },
    secilmemis:{
        fontSize:20,
       
    },
    Ort:{ 
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
          }
})