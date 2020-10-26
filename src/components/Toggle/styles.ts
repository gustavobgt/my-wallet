import styled from 'styled-components';

import SwitchButton, { ReactSwitchProps } from 'react-switch';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

const ToggleSelector = styled(SwitchButton).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
      margin: 0 7px;
  `;

  export { Container, ToggleLabel, ToggleSelector };