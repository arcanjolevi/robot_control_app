import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 15px;
`;

export const SliderContainer = styled.View`
  padding-top: 50px;
  padding: 15px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
