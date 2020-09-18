import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Field = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 13px;
`;
