import {DELET_RECIPE, REQUEST_RECIPES, UPDATE_RECIPES} from '../../types/types';

const stateInitialValue: any = {
  recipes: [{id: 0, name: 'abacate com chocolate', image: ''}],
};

export function recipesReducer(state = stateInitialValue, action: any) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {...state, recipes: action.payload};
    case UPDATE_RECIPES:
      return {...state, recipes: [...state.recipes, action.payload]};
    case DELET_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe: any) => recipe.id !== action.payload.id,
        ),
      };
  }
}
