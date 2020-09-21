import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const IntructionsContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Instruction = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const InstructionText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
