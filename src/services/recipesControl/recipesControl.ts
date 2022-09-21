import firestore from '@react-native-firebase/firestore';

export const fetchAllRecipes = async () => {
  try {
    const requestrecipes: any = await firestore()
      .collection('recipes')
      .doc('items')
      .get();
    return await requestrecipes.data().recipes;
  } catch (error: any) {
    console.log(error);
  }
};

export const updateRecipes = async (newRecipe: any) => {
  try {
    const requestrecipes: any = await fetchAllRecipes();
    const addRecipe = [...requestrecipes, newRecipe];
    await firestore().collection('recipse').doc('items').set(addRecipe);
  } catch (error: any) {
    console.log(error.message);
  }
};
