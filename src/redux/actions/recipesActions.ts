import {Dispatch} from 'react';
import {
  fetchAllRecipes,
  removeRecipeIndatabase,
  updateRecipesInDatabase,
} from '../../services/recipesControl/recipesControl';
import {DELET_RECIPE, REQUEST_RECIPES, UPDATE_RECIPES} from '../types/types';

const updateRecipes = (payload: any, type: string) => ({
  type,
  payload,
});

export const initRecipeRequest = (): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const getRecipes = await fetchAllRecipes();
      console.log(getRecipes);
      dispatch(updateRecipes(getRecipes, REQUEST_RECIPES));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const addRecipe = (recipeData: any): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    try {
      const recipeInf: any = {
        ...recipeData,
        uid: state().userStore.uid,
        id: `${Math.floor(Math.random() * 65536)}${Math.floor(
          Math.random() * 65535,
        )}`,
      };
      await updateRecipesInDatabase(recipeInf);
      dispatch(updateRecipes(recipeInf, UPDATE_RECIPES));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const removeRecipe = (recipeData: any) => {
  return async (dispatch: Dispatch<any>, state: any) => {
    await removeRecipeIndatabase(recipeData);
    const removeRecipeInStore = state().recipes.filter((recipe: any) => {
      return recipe.id !== recipeData.id;
    });
    dispatch(updateRecipes(removeRecipeInStore, DELET_RECIPE));
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
