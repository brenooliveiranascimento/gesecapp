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

export const updateRecipesInDatabase = async (newRecipe: any) => {
  try {
    const requestrecipes: any = await fetchAllRecipes();
    const addRecipe = {
      recipes: [...requestrecipes, newRecipe],
    };
    console.log(addRecipe);
    await firestore().collection('recipes').doc('items').set(addRecipe);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const removeRecipeIndatabase = async (nowRecipe: any) => {
  try {
    const requestrecipes: any = await fetchAllRecipes();
    const removeItem = {
      recipes: await requestrecipes.filter((recipe: any) => {
        return recipe.id !== nowRecipe.id;
      }),
    };
    await firestore().collection('recipes').doc('items').set(removeItem);
  } catch (error: any) {
    console.log(error.message);
  }
};
