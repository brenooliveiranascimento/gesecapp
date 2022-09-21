import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
import {register_user, sigin_User} from '../../redux/actions/authActions';

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
      dispatch(register_user(userData));
    } else {
      console.log('Preencha todos os campos');
    }
  };

  const signInUser = () => {
    if (enable) {
      dispatch(sigin_User(userData.email, userData.password));
    } else {
      console.log('Preencha todos os campos');
    }
  };

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
      <GeneralButton
        enabled={enable}
        onPress={() => (register ? registerUser() : signInUser())}>
        <TexRegistertBtn>
          {enable
            ? register
              ? 'Registrar'
              : 'Entrar'
            : 'preencha todos os campos'}
        </TexRegistertBtn>
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
