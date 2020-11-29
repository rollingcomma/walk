import AsyncStorage from '@react-native-async-storage/async-storage';

export const _storeData = async (item) => {
  try {
    if(item)
      await AsyncStorage.setItem("user",
        JSON.stringify(item)
      );
  } catch (error) {
    console.log("error save data", error);
  }
};

export const _retrieveData = async (key) => {
  try {
    // console.log("get item", key)
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
    console.log("error fetch data", error);
  }
};
