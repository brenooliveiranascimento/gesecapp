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
  const [showAlert, setShowAlert] = useState(false);

  const addNewRecipe = () => {
    if (newRecipe.name) {
      dispatch(addRecipe(newRecipe));
      setNewRecipe({
        name: '',
        image: '',
      });
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <CreateRecipeContainer>
      <InputArea>
        <RecipeInput
          value={newRecipe.name}
          onChangeText={(text: string) => {
            setNewRecipe({...newRecipe, name: text});
            setShowAlert(false);
          }}
          style={{
            borderBottomColor: showAlert ? 'red' : 'black',
          }}
          placeholder={showAlert ? 'Digite um nome!!' : 'Nomde da receita'}
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
            uri: newRecipe.image ? newRecipe.image : 'Receita',
          }}
        />
        <Add>Adicionar</Add>
      </TouchableOpacity>
    </CreateRecipeContainer>
  );
}

export default CreateRecipe;
