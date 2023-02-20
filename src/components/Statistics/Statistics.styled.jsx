import styled from 'styled-components';

export const StatItem = styled.li`
  text-align: center;
  font-size: 18px;
  list-style: none;
  &:nth-child(4) {
    margin-top: 8px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-decoration: overline; */
    color: #030303;
  }
  &:nth-child(5) {
    margin-top: 8px;
    font-weight: bold;
    font-style: italic;
    /* text-decoration: underline; */
    color: #020202;
  }
`;
