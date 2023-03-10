import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
  list-style: none;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 6px;
  text-transform: capitalize;

  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: rgba(255, 252, 252, 0.911) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    transform: scale(1.2);
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
