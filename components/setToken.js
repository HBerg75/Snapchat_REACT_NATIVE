
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (e) {
      
    }
  }

  export default storeData