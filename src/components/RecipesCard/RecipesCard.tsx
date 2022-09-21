import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BtnArea, Card, CardImage, CardText} from './RecipeCardComponents';
import {useSelector} from 'react-redux';

function RecipesCard({recipe}: any) {
  const userData = useSelector(({userStore}: any) => userStore.uid);
  return (
    <Card>
      <CardImage source={{uri: recipe.image}} />
      <CardText>{recipe.name}</CardText>
      {userData === recipe.uid && (
        <BtnArea>
          <TouchableOpacity>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Deletar</Text>
          </TouchableOpacity>
        </BtnArea>
      )}
    </Card>
  );
}

export default RecipesCard;
