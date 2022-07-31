import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2024',
    paddingTop: 40
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  h1: {
    marginTop: 60,
    marginBottom: 10,
    fontSize: 40,
    color: 'white'
  }
})
