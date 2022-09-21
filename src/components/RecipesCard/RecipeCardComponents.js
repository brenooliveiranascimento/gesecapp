import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 10px;
`;

export const Card = styled.TouchableOpacity`
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const CardText = styled.Text`
  font-size: 17px;
`;
