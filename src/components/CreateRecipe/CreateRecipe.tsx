/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Add,
  CreateRecipeContainer,
  InputArea,
  MoreButton,
  RecipeInput,
} from './CreateRecipeComponents';

function CreateRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    image: '',
  });

  return (
    <CreateRecipeContainer>
      <InputArea>
        <RecipeInput
          value={newRecipe.name}
          onChangeText={(text: string) =>
            setNewRecipe({...newRecipe, name: text})
          }
          placeholder="Nomde da receita"
        />
        <RecipeInput
          onChangeText={(text: string) =>
            setNewRecipe({...newRecipe, image: text})
          }
          placeholder="Url da receita"
        />
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
