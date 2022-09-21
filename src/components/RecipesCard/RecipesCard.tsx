import React from 'react';
import {Card, CardImage, CardText} from './RecipeCardComponents';

function RecipesCard({recipe}: any) {
  return (
    <Card>
      <CardImage source={{uri: recipe.image}} />
      <CardText>{recipe.name}</CardText>
    </Card>
  );
}

export default RecipesCard;
