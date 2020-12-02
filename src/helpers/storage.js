import AsyncStorage from '@react-native-async-storage/async-storage';

export const _storeData = async (item) => {
  try {
    if(item)
      await AsyncStorage.setItem("user",
        JSON.stringify(item)
      );
  } catch (error) {
    console.log("error save data to storage", error);
  }
};

export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
    console.log("error fetch data from storage", error);
  }
};

export const _clearData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch (error) {
    console.log("error clear storage", error);
  }

}
