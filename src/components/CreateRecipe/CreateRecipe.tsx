/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  Add,
  CreateRecipeContainer,
  InputArea,
  MoreButton,
  RecipeInput,
} from './CreateRecipeComponents';

function CreateRecipe() {
  return (
    <CreateRecipeContainer>
      <InputArea>
        <RecipeInput placeholder="Nomde da receita" />
        <RecipeInput placeholder="Url da receita" />
      </InputArea>
      <TouchableOpacity>
        <MoreButton>+</MoreButton>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://receitascluboficial.com.br/wp-content/uploads/2022/06/bolo-de-milho-cremoso-de-liquidi.webp',
          }}
        />
        <Add>Adicionar</Add>
      </TouchableOpacity>
    </CreateRecipeContainer>
  );
}

export default CreateRecipe;
