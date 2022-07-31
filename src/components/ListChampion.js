import React, { useEffect,useLayoutEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Pressable
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../stores/user.reducer'
import { useNavigation } from '@react-navigation/native'

const ListChampion = () => {
  const navigation = useNavigation()
  const numColumns = 3
  const dispatch = useDispatch()
  const users = useSelector(selectAll)
  const [costSelect, setCostSelect] = useState(0)
  const [champion, setChampion] = useState([])
  const [filter, setFilter] = useState(0)

  useEffect(() => {
    dispatch(fetchUser())
    setFilter(0)
  }, [dispatch])


  useEffect(() => {
    if (users?.length) {
      if (filter) {
        setChampion(users.filter(element => element.cost === filter))
      return
      }
      setChampion(users)
    }
  }, [users, filter])

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate('Champion', { item })}>
        <View style={[styles.item, styles['cost' + item.cost]]}>
           <Image source={item.image[item.name]} style={styles.image}/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable style={styles.button} onPress={() => {
            setFilter(1);
          }}>
          <Text style={styles.textButton} >1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(2);
          }}>
          <Text style={styles.textButton} >2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(3);
          }}>
          <Text style={styles.textButton} >3</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(4);
          }}>
          <Text style={styles.textButton} >4</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(5);
          }}>
          <Text style={styles.textButton} >5</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(8);
          }}>
          <Text style={styles.textButton} >8</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
            setFilter(10);
          }}>
          <Text style={styles.textButton} >10</Text>
        </Pressable>
      </View>
      <View style={styles.list}>
         <FlatList
          data={champion}
          keyExtractor={champion => champion.id}
          renderItem={renderItem}
          numColumns={numColumns}
        /> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  button: {
    padding: 5, 
    backgroundColor: 'white',
    borderRadius: 5, 
    padding: 10,
  },
  textButton: {
    fontWeight: 'bold',
  },
  itemTransparent: {
    backgroundColor: 'blue'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cost1: {
    backgroundColor: '#A9A9A9'
  },
  cost2: {
    backgroundColor: '#058635'
  },
  cost3: {
    backgroundColor: '#1666B8'
  },
  cost4: {
    backgroundColor: '#8b3b9a'
  },
  cost5: {
    backgroundColor: '#c48e31'
  },
  cost8: {
    backgroundColor: '#8b3b9a'
  },
  cost10: {
    backgroundColor: '#eeca20'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  list: {
    alignItems: 'center',
    marginBottom: 200
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default ListChampion;
