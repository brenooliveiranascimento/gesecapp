import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BtnArea, Card, CardImage, CardText} from './RecipeCardComponents';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeRecipe} from '../../redux/actions/recipesActions';

function RecipesCard({recipe}: any) {
  const dispatch = useDispatch();
  const userData = useSelector(({userStore}: any) => userStore.uid);
  const questionUrl =
    'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Interrogacao.jpg?alt=media&token=3e00c7a5-23a5-41e2-8c10-4c1b2f948bb8';

  const remove = () => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <Card>
      <CardImage source={{uri: recipe.image ? recipe.image : questionUrl}} />
      <CardText>{recipe.name}</CardText>
      {userData === recipe.uid && (
        <BtnArea>
          <TouchableOpacity>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={remove}>
            <Text>Deletar</Text>
          </TouchableOpacity>
        </BtnArea>
      )}
    </Card>
  );
}

export default RecipesCard;
