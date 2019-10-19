import styled from 'styled-components';
import { borderRadius, colorUsage, getSpacing } from 'stylesheet';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 ${getSpacing(26)};
`;
RootContainer.displayName = 'RootContainer';

export const PageContent = styled.main`
  background-color: ${colorUsage.contentBackground};
  padding: 4rem;
  flex-grow: 1;
`;
PageContent.displayName = 'PageContent';
