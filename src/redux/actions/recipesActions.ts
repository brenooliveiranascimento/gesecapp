import {Dispatch} from 'react';
import {fetchAllRecipes} from '../../services/recipesControl/recipesControl';
import {REQUEST_RECIPES} from '../types/types';

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
