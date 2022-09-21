import styled from 'styled-components/native';

export const GeneralContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const GeneralInput = styled.TextInput`
  width: 90%;
  height: 40px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GeneralButton = styled.TouchableOpacity`
  width: 300px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 10px;
  color: ${({enabled}) => (enabled ? '#fff' : '#ddd')};
  background-color: ${({enabled}) => (enabled ? '#6495ed' : '#486ba8')};
`;
