import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin-top: 70px;
`;

export const Card = styled.View`
  width: 180px;
  min-height: 270px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CardImage = styled.Image`
  width: 180px;
  height: 200px;
`;

export const CardText = styled.Text`
  font-size: 17px;
`;

export const BtnArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BtnAlter = styled.TouchableOpacity`
  margin: 10px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const EditNameInput = styled.TextInput`
  width: 150px;
  height: 30px;
  padding-bottom: -10px;
`;
