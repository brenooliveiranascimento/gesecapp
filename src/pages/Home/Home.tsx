/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {initRecipeRequest} from '../../redux/actions/recipesActions';
import {recipesTypes} from '../../redux/reduxTypes/reduxTypes';
import {CardContainer} from '../../components/RecipesCard/RecipeCardComponents';
import RecipesCard from '../../components/RecipesCard/RecipesCard';
import {GeneralButton} from '../GlobalComponents/GlobalComponents';
import {HomeContainer} from './HomeComponents';
import CreateRecipe from '../../components/CreateRecipe/CreateRecipe';

export default function Home() {
  const [addRecipe, setAddRecipe] = useState(false);
  const dispatch = useDispatch();
  const allRecipes = useSelector(
    ({recipesReducer}: any) => recipesReducer.recipes,
  );

  useEffect(() => {
    dispatch(initRecipeRequest());
  }, []);

  return (
    <HomeContainer>
      <GeneralButton onPress={() => setAddRecipe(!addRecipe)}>
        <Text style={{color: 'white', fontSize: 20}}>
          {addRecipe ? 'Cancelar' : 'Nova Receita'}
        </Text>
      </GeneralButton>
      {addRecipe && <CreateRecipe />}
      <CardContainer>
        {allRecipes &&
          allRecipes.map((recipe: recipesTypes) => (
            <RecipesCard recipe={recipe} />
          ))}
      </CardContainer>
    </HomeContainer>
  );
}
