import {Dispatch} from 'react';
import {
  fetchAllRecipes,
  updateRecipesInDatabase,
} from '../../services/recipesControl/recipesControl';
import {REQUEST_RECIPES, UPDATE_RECIPES} from '../types/types';

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
      };
      await updateRecipesInDatabase(recipeInf);
      dispatch(updateRecipes(recipeInf, UPDATE_RECIPES));
    } catch (error: any) {
      console.log(error);
    }
  };
};
