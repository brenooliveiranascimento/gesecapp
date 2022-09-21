/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initRecipeRequest} from '../../redux/actions/recipesActions';
import {recipesTypes} from '../../redux/reduxTypes/reduxTypes';
import {CardContainer} from '../../components/RecipesCard/RecipeCardComponents';
import RecipesCard from '../../components/RecipesCard/RecipesCard';

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector(
    ({recipesReducer}: any) => recipesReducer.recipes,
  );

  useEffect(() => {
    dispatch(initRecipeRequest());
  }, []);

  return (
    <View>
      <CardContainer>
        {allRecipes &&
          allRecipes.map((recipe: recipesTypes) => (
            <RecipesCard recipe={recipe} />
          ))}
      </CardContainer>
    </View>
  );
}
