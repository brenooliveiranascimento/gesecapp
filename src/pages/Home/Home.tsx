/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initRecipeRequest} from '../../redux/actions/recipesActions';
import {recipesTypes} from '../../redux/reduxTypes/reduxTypes';

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
      {allRecipes &&
        allRecipes.map((recipe: recipesTypes) => (
          <View>
            <Text>{recipe.name}</Text>
          </View>
        ))}
    </View>
  );
}
