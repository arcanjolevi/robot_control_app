import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  border-width: 3px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-color: #fff;
`;

export const ButtonText = styled.Text`
  margin-right: 10px;
  font-weight: bold;
  color: #fff;
`;
