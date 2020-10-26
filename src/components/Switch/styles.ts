import styled from 'styled-components';

import Switch, { ReactSwitchProps } from 'react-switch';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SwitchLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

const SwitchButton = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
      margin: 0 7px;
  `;

  export { Container, SwitchLabel, SwitchButton };