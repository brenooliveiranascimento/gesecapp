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
    'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/question-mark-png-5a3a85e2667e64.6782850215137848024198.jpg?alt=media&token=3a62355a-01f4-4aac-92e2-1a4a51dea970';

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
