import {Dispatch} from 'react';
import {
  editRecipeInDatabase,
  fetchAllRecipes,
  removeRecipeIndatabase,
  updateRecipesInDatabase,
} from '../../services/recipesControl/recipesControl';
import {
  DELET_RECIPE,
  EDIT_RECIPE,
  REQUEST_RECIPES,
  UPDATE_RECIPES,
} from '../types/types';

const updateRecipes = (payload: any, type: string) => ({
  type,
  payload,
});

export const initRecipeRequest = (): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const getRecipes = await fetchAllRecipes();
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

export const removeRecipe = (recipeData: any): any => {
  return async (dispatch: Dispatch<any>) => {
    await removeRecipeIndatabase(recipeData);
    dispatch(updateRecipes(recipeData, DELET_RECIPE));
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const editItem = (recipeData: any, indexEdit: string): any => {
  return async (dispatch: Dispatch<any>, state: any) => {
    const editList = await state().recipesReducer.recipes;
    editList[indexEdit] = recipeData;
    await editRecipeInDatabase(editList);
    dispatch(updateRecipes([], EDIT_RECIPE));
    dispatch(updateRecipes(editList, EDIT_RECIPE));
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
