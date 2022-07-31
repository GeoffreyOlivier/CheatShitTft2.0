import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ListChampion = props => {
  const item = props.route.params.item

  const ListItems = [

    {
      id: 0,
      name: 'archangels staff',
      image: require('../../assets/images/Item/archangels-staff.png'),
      build: [ 1, 2]
    },
    {
      id: 1,
      name: 'assassin emblem',
      image: require('../../assets/images/Item/assassin-emblem.png')
    },
    {
      id: 2,
      name: 'banshees claw',
      image: require('../../assets/images/Item/banshees-claw.png')
    },
    {
      id: 3,
      name: 'bf sword',
      image: require('../../assets/images/Item/bf-sword.png')
    },
    {
      id: 4,
      name: 'Bloodthirster',
      image: require('../../assets/images/Item/Bloodthirster.png')
    },
    {
      id: 5,
      name: 'blue buff',
      image: require('../../assets/images/Item/blue-buff.png')
    },
    {
      id: 6,
      name: 'bramble vest',
      image: require('../../assets/images/Item/bramble-vest.png')
    },
    {
      id: 7,
      name: 'cavalier emblem',
      image: require('../../assets/images/Item/cavalier-emblem.png')
    },
    {
      id: 8,
      name: 'chain vest',
      image: require('../../assets/images/Item/chain-vest.png')
    },
    {
      id: 9,
      name: 'chalice of power',
      image: require('../../assets/images/Item/chalice-of-power.png')
    },
    {
      id: 10,
      name: 'deathblade',
      image: require('../../assets/images/Item/deathblade.png')
    },
    {
      id: 11,
      name: 'dragonmancer emblem',
      image: require('../../assets/images/Item/dragonmancer-emblem.png')
    },
    {
      id: 12,
      name: 'dragons claw',
      image: require('../../assets/images/Item/dragons-claw.png')
    },
    {
      id: 13,
      name: 'edge of night',
      image: require('../../assets/images/Item/edge-of-night.png')
    },
    {
      id: 14,
      name: 'frozen heart',
      image: require('../../assets/images/Item/frozen-heart.png')
    },
    {
      id: 15,
      name: 'gargoyle stoneplate',
      image: require('../../assets/images/Item/gargoyle-stoneplate.png')
    },
    {
      id: 16,
      name: 'giant slayer',
      image: require('../../assets/images/Item/giant-slayer.png')
    },
    {
      id: 17,
      name: 'giants belt',
      image: require('../../assets/images/Item/giants-belt.png')
    },
    {
      id: 18,
      name: 'guardian emblem',
      image: require('../../assets/images/Item/guardian-emblem.png')
    },
    {
      id: 19,
      name: 'guinsoos rageblade',
      image: require('../../assets/images/Item/guinsoos-rageblade.png')
    },
    {
      id: 20,
      name: 'GuinsoosRageblade',
      image: require('../../assets/images/Item/GuinsoosRageblade.png')
    },
    {
      id: 21,
      name: 'hand of justice',
      image: require('../../assets/images/Item/hand-of-justice.png')
    },
    {
      id: 22,
      name: 'hextech gunblade',
      image: require('../../assets/images/Item/hextech-gunblade.png')
    },
    {
      id: 23,
      name: 'infinity edge',
      image: require('../../assets/images/Item/infinity-edge.png')
    },
    {
      id: 24,
      name: 'ionic spark',
      image: require('../../assets/images/Item/ionic-spark.png')
    },
    {
      id: 25,
      name: 'jeweled gauntlet',
      image: require('../../assets/images/Item/jeweled-gauntlet.png')
    },
    {
      id: 26,
      name: 'last whisper',
      image: require('../../assets/images/Item/last-whisper.png')
    },
    {
      id: 27,
      name: 'locket of the iron solari',
      image: require('../../assets/images/Item/locket-of-the-iron-solari.png')
    },
    {
      id: 28,
      name: 'mage emblem',
      image: require('../../assets/images/Item/mage-emblem.png')
    },
    {
      id: 29,
      name: 'mirage emblem',
      image: require('../../assets/images/Item/mirage-emblem.png')
    },
    {
      id: 30,
      name: 'morellonomicon',
      image: require('../../assets/images/Item/morellonomicon.png')
    },
    {
      id: 31,
      name: 'needlessly large rod',
      image: require('../../assets/images/Item/needlessly-large-rod.png')
    },
    {
      id: 32,
      name: 'negatron cloak',
      image: require('../../assets/images/Item/negatron-cloak.png')
    },
    {
      id: 33,
      name: 'Quicksilver',
      image: require('../../assets/images/Item/Quicksilver.png')
    },
    {
      id: 34,
      name: 'rabadons deathcap',
      image: require('../../assets/images/Item/rabadons-deathcap.png')
    },
    {
      id: 35,
      name: 'ragewing emblem',
      image: require('../../assets/images/Item/ragewing-emblem.png')
    },
    {
      id: 36,
      name: 'rapid firecannon',
      image: require('../../assets/images/Item/rapid-firecannon.png')
    },
    {
      id: 37,
      name: 'recurve bow',
      image: require('../../assets/images/Item/recurve-bow.png')
    },
    {
      id: 38,
      name: 'redemption',
      image: require('../../assets/images/Item/redemption.png')
    },
    {
      id: 39,
      name: 'runaans hurricane',
      image: require('../../assets/images/Item/runaans-hurricane.png')
    },
    {
      id: 40,
      name: 'shimmerscale emblem',
      image: require('../../assets/images/Item/shimmerscale-emblem.png')
    },
    {
      id: 41,
      name: 'shroud of stillness',
      image: require('../../assets/images/Item/shroud-of-stillness.png')
    },
    {
      id: 42,
      name: 'sparring gloves',
      image: require('../../assets/images/Item/sparring-gloves.png')
    },
    {
      id: 43,
      name: 'spatula',
      image: require('../../assets/images/Item/spatula.png')
    },
    {
      id: 44,
      name: 'spear of shojin',
      image: require('../../assets/images/Item/spear-of-shojin.png')
    },
    {
      id: 45,
      name: 'statikk shiv',
      image: require('../../assets/images/Item/statikk-shiv.png')
    },
    {
      id: 46,
      name: 'sunfire cape',
      image: require('../../assets/images/Item/sunfire-cape.png')
    },
    {
      id: 47,
      name: 'tacticians crown',
      image: require('../../assets/images/Item/tacticians-crown.png')
    },
    {
      id: 48,
      name: 'tear of the goddess',
      image: require('../../assets/images/Item/tear-of-the-goddess.png')
    },
    {
      id: 49,
      name: 'thiefs gloves',
      image: require('../../assets/images/Item/thiefs-gloves.png')
    },
    {
      id: 50,
      name: 'titans resolve',
      image: require('../../assets/images/Item/titans-resolve.png')
    },
    {
      id: 51,
      name: 'warmogs armor',
      image: require('../../assets/images/Item/warmogs-armor.png')
    },
    {
      id: 52,
      name: 'zekes herald',
      image: require('../../assets/images/Item/zekes-herald.png')
    },
    {
      id: 53,
      name: 'zephyr',
      image: require('../../assets/images/Item/zephyr.png')
    },
    {
      id: 54,
      name: 'zzrot portal',
      image: require('../../assets/images/Item/zzrot-portal.png')
    }
   ]
  var idChoose =''
  const renderItem = (item, letter) => {
  var founder = ''
  return (
        <View style={styles.list}>
          {item[letter].map((indexItem, i) => {
            founder =  ListItems.find(e => e.id === item[letter][i])
            return (
                <Image source={founder.image} style={styles.item}/>
            )
        })}
      </View>
    );

  }
  const renderItemsA = renderItem(item, 'itemsA')
  const renderItemsB = renderItem(item, 'itemsB')
  const renderItemsC = renderItem(item, 'itemsC')

  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image[item.name]} style={styles.imageHere}/>
      <Text style={styles.h1}>{item.name}</Text>
      {renderItemsA}
      {renderItemsB}
      {renderItemsC}
      </View>
      
  </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2024',
  },
  h1: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
  },
  imageHere: {
    width: '50%',
    height: '50%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    
  },
  item: {
    height: 50,
    width: 50,
    margin: 5,
    
  },
  list: {
    flex: 1,
  flexDirection: 'row',
  margin: 10,
  alignSelf: 'center',
  }

})

export default ListChampion
