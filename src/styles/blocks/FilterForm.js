import styled from 'styled-components';
import { Input } from '../../components/Kit/Input/Input';
import { H2, NormalTextBlock, GradientText } from './Text';

export const FilterForm = styled.form`
  padding: 18px 16px;
  // background: ${({ theme }) => theme.bgOpacity};
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 300px;

  @media (max-width: 1040px) {
    width: 280px;
  }

  @media (max-width: 1000px) {
    width: 358px;
  }

  @media (max-width: 768px) {
    display: none;
    width: 100%;

    &.open {
      display: block;
    }
  }
`;

export const FFContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;

    &.open {
      display: flex;
      position: fixed;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(37, 38, 45, 0.9);
    }
  }

  @media (max-width: 546px) {
    &.open {
      flex-direction: column;
    }
  }
`;

export const FFWrapper = styled.div`
  display: inline-block;

  @media (max-width: 768px) {
    height: 100%;
    padding-top: 44px;
    background: ${({ theme }) => theme.bg};
    overflow: auto;
    order: 2;
    width: 100%;
    padding: 16px;
  }

  @media (max-width: 546px) {
    order: 2;
    width: 100%;
    padding: 16px;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FilterIcon = styled.span`
  display: inline-block;
  height: 16px;
  stroke-width: 2;
  stroke: currentColor;
  fill: currentColor;
  color: ${({ theme }) => theme.color};
  stroke: ${({ theme }) => theme.color};
`;

export const FilterText = styled.div`
  color: ${({ theme }) => theme.color};
`;

export const FFResultsMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    display: flex;
    order: 1;
    width: 100%;
    height: 158px;
  }

  @media (max-width: 546px) {
    order: 1;
    width: 100%;
    height: 158px;
  }
`;

export const FFOpenMobileFilter = styled(NormalTextBlock)`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 10px;
  }
`;

export const FFOpenMobileFilterTittle = styled(NormalTextBlock)`
  font-weight: 500;

  &:before {
    font-family: 'meetup-icons', serif;
    content: '\\e802';
    display: inline-block;
    margin-right: 13px;
    height: 9px;
    width: 13px;
  }
`;

export const FFOpenMobileFilterParams = styled(NormalTextBlock)`
  opacity: 0.6;

  @media (max-width: 546px) {
    & > span {
      display: none;
    }
  }
`;

export const FFCheckResultTxt = styled(NormalTextBlock)`
  ${GradientText};

  margin-top: 7px;
`;

export const FFCheckResultTxt2 = styled(FFCheckResultTxt)`
  background: ${({ theme }) => theme.greenGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  &:hover {
    -webkit-text-fill-color: unset;
  }

  font-weight: 700;
`;

export const FFControls = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const FFSection = styled.div`
  width: 100%;

  margin-top: 17px;
  padding-top: 15px;
  // & + & {
  //   margin-top: 22px;
  //   padding-top: 20px;
  //   // border-top: 1px solid ${({ theme }) => theme.borderOpacity};
  // }
`;

export const FFSectionNull = styled.div`
  width: calc(100% + 16px);
  margin-top: 16px;
  padding-top: 0px;
  margin-left: -16px;
  margin-right: -16px;
`;

export const FFSectionHeader = styled(H2)`
  margin: 0;

  & + * {
    margin-top: 13px;
  }
`;

export const FFSectionTxt = styled(NormalTextBlock)`
  margin: 0 0 6px 0;
  opacity: 0.6;
`;

export const FFSectionTxtButton = styled(NormalTextBlock)`
  ${GradientText};
`;

export const InputWrapper = styled.div`
  position: relative;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const FFInput = styled(Input)`
  border: 1px solid #ff5a99;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  height: 34px;

  &::placeholder {
    color: ${({ theme }) => theme.textTag};
    opacity: 1;
  }

  :not(:placeholder-shown) {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const CrossButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
  top: 10px;
`;

export const SearchButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 8px;
  left: 16px;

  & path {
    fill: ${(props) => (props.event ? 'url(#orangeGradient)' : props.theme.textTag)};
  }
`;
