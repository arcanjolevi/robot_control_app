import React from 'react';
import styled from 'styled-components/native';

interface Props {
  connected?: boolean;
}

const ConnectedIndicator = ({ connected = false }: Props) => {
  return (
    <Container>
      <IndicatorText>{connected ? 'Conectado' : 'Desconectado'}</IndicatorText>
      <IndicatorIcon>
        <Indicator style={{ backgroundColor: connected ? 'green' : 'red' }} />
      </IndicatorIcon>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IndicatorText = styled.Text`
  color: #fff;
  margin-right: 10px;
  margin-bottom: 2px;
`;

const IndicatorIcon = styled.View`
  width: 15px;
  height: 15px;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
`;

const Indicator = styled.View`
  width: 10px;
  height: 10px;
`;

export default ConnectedIndicator;
