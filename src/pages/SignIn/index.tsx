import React, {useContext, useState} from 'react';

import {MyButton} from '../../components/MyButton';
import {MyTextInput} from '../../components/MyTextInput';
import {useAuth} from '../../contexts/Auth';

import {Container, Switch} from './styles';
import {ThemeContext, ThemeType} from '../../theme/Theme';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const {toggleTheme, theme} = useContext(ThemeContext);

  const darkModeIsEnabled = theme === ThemeType.dark;

  return (
    <Container>
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
      <Switch value={darkModeIsEnabled} onValueChange={toggleTheme} />
    </Container>
  );
}
