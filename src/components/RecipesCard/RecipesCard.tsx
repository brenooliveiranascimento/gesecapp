import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  BtnAlter,
  BtnArea,
  Card,
  CardImage,
  CardText,
  EditNameInput,
} from './RecipeCardComponents';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {editItem, removeRecipe} from '../../redux/actions/recipesActions';

function RecipesCard({recipe, index}: any) {
  const dispatch = useDispatch();
  const userData = useSelector(({userStore}: any) => userStore.uid);
  const [nowName, setNowName] = useState('');
  const [nowUrl, setNowUrl] = useState('');

  const [inEdit, setEdit] = useState(false);
  const questionUrl =
    'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/Interrogacao.jpg?alt=media&token=3e00c7a5-23a5-41e2-8c10-4c1b2f948bb8';

  const remove = () => {
    dispatch(removeRecipe(recipe));
  };

  const saveEdit = () => {
    const editedItem = {
      ...recipe,
      name: nowName,
      image: nowUrl,
    };
    dispatch(editItem(editedItem, index));
  };

  return (
    <Card>
      <CardImage
        source={{
          uri: nowUrl ? nowUrl : recipe.image ? recipe.image : questionUrl,
        }}
      />
      {inEdit ? (
        <View>
          <EditNameInput
            testID={`alter-name-${index}`}
            onChangeText={(text: string) => setNowName(text)}
            value={nowName}
          />
          <EditNameInput
            testID={`alter-url-${index}`}
            onChangeText={(text: string) => setNowUrl(text)}
            value={nowUrl}
          />
        </View>
      ) : (
        <CardText>{recipe.name}</CardText>
      )}
      {userData === recipe.uid && (
        <BtnArea>
          <BtnAlter
            testID={`edit-${index}`}
            onPress={() => {
              if (inEdit) {
                return saveEdit();
              }
              setEdit(!inEdit);
              setNowName(recipe.name);
              setNowUrl(recipe.image);
            }}>
            <Text
              style={{
                color: 'black',
              }}>
              {inEdit ? 'Salvar' : 'Editar'}
            </Text>
          </BtnAlter>
          <BtnAlter
            style={{
              backgroundColor: inEdit ? 'red' : 'white',
            }}
            testID={`delet-${recipe.name.split(' ')[0]}`}
            onPress={() => (inEdit ? setEdit(false) : remove())}>
            <Text
              style={{
                color: inEdit ? 'white' : 'black',
              }}>
              {inEdit ? 'calcelar' : 'Deletar'}
            </Text>
          </BtnAlter>
        </BtnArea>
      )}
    </Card>
  );
}

export default RecipesCard;
