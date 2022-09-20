import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {FormContainer, TexRegistertBtn} from './AuthFormComponent';
import {
  GeneralButton,
  GeneralInput,
} from '../../pages/GlobalComponents/GlobalComponents';
import {
  emailVerification,
  passwordVerification,
} from '../../services/emailAndPasswordVerificaion/emailAndPasswordVerificaion';
import {useDispatch} from 'react-redux';
import {registeuser} from '../../redux/actions/authActions';

export default function AuthForm() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [enable, setEnabled] = useState(false);
  const [register, setRegister] = useState(false);

  const registerUser = () => {
    if (enable) {
      dispatch(registeuser(userData));
    } else {
      console.log('dnwaiod');
    }
  };

  const signInUser = () => console.log('register');

  useEffect(() => {
    const verifyForm = () => {
      if (
        emailVerification(userData.email) &&
        passwordVerification(userData.password)
      ) {
        setEnabled(true);
        return;
      }
      setEnabled(false);
    };
    verifyForm();
  }, [userData]);

  return (
    <FormContainer>
      <Text style={{fontSize: 30, fontWeight: '900'}}>GesecApp</Text>
      {register && (
        <GeneralInput
          value={userData.name}
          onChangeText={(text: string) =>
            setUserData({...userData, name: text})
          }
          placeholder="Nome"
        />
      )}
      <GeneralInput
        value={userData.email}
        onChangeText={(text: string) => setUserData({...userData, email: text})}
        placeholder="Email"
      />
      <GeneralInput
        value={userData.password}
        onChangeText={(text: string) =>
          setUserData({...userData, password: text})
        }
        placeholder="Senha"
      />
      <GeneralButton onPress={() => (register ? registerUser() : signInUser())}>
        <TexRegistertBtn>{register ? 'Registrar' : 'Entrar'}</TexRegistertBtn>
      </GeneralButton>
      <TouchableOpacity
        onPress={() => setRegister(!register)}
        style={{marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {register ? 'Criar conta' : 'Já possuo conta'}
        </Text>
      </TouchableOpacity>
    </FormContainer>
  );
}
