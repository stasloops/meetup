import styled from 'styled-components';

export const Tag = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  line-height: 13px;

  padding: 4px;

  display: flex;
  align-items: center;
  height: 30px;
  width: fit-content;

  color: ${({ theme }) => theme.tagColor};

  background: #e3e6ff;
`;

export const Tag2 = styled(Tag)`
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 500;
  color: ${(props) => (props.isActive ? '#ffffff' : '#21232e')};
  background-color: ${(props) => (props.isActive ? '#5D5FEF' : '#e3e6ff')};
`;
