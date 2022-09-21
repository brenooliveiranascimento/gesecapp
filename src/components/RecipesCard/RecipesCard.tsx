import React from 'react';
import {Card, CardImage, CardText} from './RecipeCardComponents';

function RecipesCard({recipe}: any) {
  return (
    <Card>
      <CardImage />
      <CardText>{recipe.name}</CardText>
    </Card>
  );
}

export default RecipesCard;
