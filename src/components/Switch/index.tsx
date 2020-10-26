import React from 'react';

import { Container, SwitchLabel, SwitchButton } from './styles';

const Switch: React.FC = () => {
  return (
    <Container>
      <SwitchLabel>Light</SwitchLabel>
      <SwitchButton checked uncheckedIcon={false} checkedIcon={false} onChange={() => {console.log('mudou')}}/>
      <SwitchLabel>Dark</SwitchLabel>
    </Container>
  );
};

export default Switch;
