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
  const questionUrl =
    'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Interrogacao.jpg?alt=media&token=3e00c7a5-23a5-41e2-8c10-4c1b2f948bb8';

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
            uri: newRecipe.image ? newRecipe.image : questionUrl,
          }}
        />
        <Add>Adicionar</Add>
      </TouchableOpacity>
    </CreateRecipeContainer>
  );
}

export default CreateRecipe;
