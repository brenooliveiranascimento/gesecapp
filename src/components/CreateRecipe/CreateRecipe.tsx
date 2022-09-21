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
import {useDispatch} from 'react-redux';
import {addRecipe} from '../../redux/actions/recipesActions';

function CreateRecipe() {
  const dispatch = useDispatch();
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    image: '',
  });

  const addNewRecipe = () => {
    dispatch(addRecipe(newRecipe));
    setNewRecipe({
      name: '',
      image: '',
    });
  };

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
          value={newRecipe.image}
          onChangeText={(text: string) =>
            setNewRecipe({...newRecipe, image: text})
          }
          placeholder="Url da receita"
        />
      </InputArea>
      <TouchableOpacity onPress={addNewRecipe}>
        <MoreButton>+</MoreButton>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: newRecipe.image,
          }}
        />
        <Add>Adicionar</Add>
      </TouchableOpacity>
    </CreateRecipeContainer>
  );
}

export default CreateRecipe;
