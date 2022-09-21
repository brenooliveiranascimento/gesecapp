import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 70px;
`;

export const Card = styled.TouchableOpacity`
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.Image`
  width: 180px;
  height: 200px;
`;

export const CardText = styled.Text`
  font-size: 17px;
`;
