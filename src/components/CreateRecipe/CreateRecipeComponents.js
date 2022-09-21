import styled from 'styled-components';

export const CreateRecipeContainer = styled.View`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const InputArea = styled.View`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RecipeInput = styled.TextInput`
  width: 220px;
  align-self: flex-end;
  height: 40px;
  margin-top: 10px;
  padding-bottom: -20px;
  background-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  display: flex;
`;

export const MoreButton = styled.Text`
  font-size: 40px;
  position: absolute;
  top: 25px;
  z-index: 99;
  left: 40px;
`;

export const Add = styled.Text`
  font-size: 18px;
  position: absolute;
  top: 80px;
  background-color: white;
  width: 100%;
  text-align: center;
  font-weight: 800;
  z-index: 99;
`;
