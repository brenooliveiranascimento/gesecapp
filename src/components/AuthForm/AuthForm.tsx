import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FormContainer, TexRegistertBtn} from './AuthFormComponent';
import {
  GeneralButton,
  GeneralInput,
} from '../../pages/GlobalComponents/GlobalComponents';

export default function AuthForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const signInUser = () => {
    console.log(userData);
  };

  return (
    <FormContainer>
      <Text style={{fontSize: 30, fontWeight: '900'}}>GesecApp</Text>
      <GeneralInput
        value={userData.email}
        onChangeText={(text: string) => setUserData({...userData, email: text})}
        placeholder="Email"
      />
      <GeneralInput
        value={userData.email}
        onChangeText={(text: string) => setUserData({...userData, email: text})}
        placeholder="Senha"
      />
      <GeneralButton onPress={signInUser}>
        <TexRegistertBtn>Entrar</TexRegistertBtn>
      </GeneralButton>
      <TouchableOpacity style={{marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Registrar</Text>
      </TouchableOpacity>
    </FormContainer>
  );
}
