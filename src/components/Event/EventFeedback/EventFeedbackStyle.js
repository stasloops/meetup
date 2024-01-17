import styled, { css } from 'styled-components';
import MarkIcon from '../../../data/assets/svg/mark.svg';

export const FeedbackForm = styled.div`
  display: ${(props) => (props.feedbackMobile ? 'none' : 'flex')};
  flex-direction: column;
  background: ${({ theme }) => theme.feedbackBg};
  margin-top: 8px;
  width: 100%;
  height: 100%;
  max-height: ${(props) => (props.captchaOpen ? '391px' : '550px')};
  margin-bottom: 105px;
  border: none;

  @media (max-width: 1000px) {
    max-width: 358px;
    min-width: 358px;
    // max-height: 526px;
  }

  @media (max-width: 768px) {
    & {
      display: flex;
      position: relative;
      bottom: 64px;

      margin-bottom: 32px;
    }
  }

  @media (max-width: 740px) {
    & {
      display: ${(props) => (props.feedbackMobile ? 'flex' : 'none')};
      top: 32px;
      min-width: 349px;
    }
  }
  @media (max-width: 450px) {
    & {
      max-width: 100%;
    }
  }
`;

export const FeedbackIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e3e6ff;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: ${(props) => (props.captchaOpen ? '62px' : 'none')};
  position: relative;
  height: 192px;
  min-height: 192px;
`;

export const FeedbackIconBoxIn = styled.div`
  position: relative;
  magrin-top: 16px;
  height: 100%;
  width: 100%;
`;

export const FeedbackText = styled.div`
  display: ${(props) => (props.captchaOpen ? 'none' : 'flex')};
  background: ${({ theme }) => theme.feedbackBg};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  row-gap: 16px;
  color: ${({ theme }) => theme.textTag};
`;

export const FeedbackInputForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 110%;
  max-width: 270px;

  @media (max-width: 1000px) {
    max-width: 326px;
    min-width: 326px;
  }

  @media (max-width: 450px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const InputFeedback = styled.input`
  font-family: var(--inter);
  border: none;
  padding: 9px 16px;
  font-style: normal;
  height: 36px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  // color: ${({ theme }) => theme.textTag};
  background: transparent;
  background-color: ${({ theme }) => theme.feedBackFormColor};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textTag};
    opacity: 0.6;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }
  :not(:placeholder-shown) {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  // @media (max-width: 1000px) {
  //   max-width: 326px;
  //   min-width: 326px;
  // }
  // @media (max-width: 450px) {
  //   max-width: 100%;
  //   min-width: 100%;
  // }
`;

export const InputFeedback2 = styled.input`
  font-family: var(--inter);
  border: none;
  padding: 9px 16px;
  font-style: normal;
  height: 36px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  background: transparent;

  background-image: ${({ theme }) => theme.orangeGradient};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textTag};
    opacity: 0.6;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  // background: ${({ theme }) => theme.orangeGradient};
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-clip: text;
`;

export const InputFeedbackMessage = styled.textarea`
  border: none;
  padding: 9px 16px;
  font-style: normal;
  font-family: var(--inter);
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.textTag};
  background: transparent;
  background-color: ${({ theme }) => theme.feedBackFormColor};
  resize: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textTag};
    opacity: 0.6;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }

  :not(:placeholder-shown) {
    background: ${({ theme }) => theme.orangeGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const InputFeedbackWrapper = styled.div`
  // max-width: 270px;
  // max-height: 35px;

  background: ${({ theme }) => theme.feedbackInput};
  opacity: 1;
  border-radius: 1px;

  border: ${({ checkForm }) => (checkForm ? '1px solid #EB3838' : 'none')};
  &:focus-within {
    background: linear-gradient(
      63.14deg,
      rgba(239, 97, 41, 0.05) 12.75%,
      rgba(240, 96, 50, 0.05) 16.6%,
      rgba(248, 93, 106, 0.05) 43.57%,
      rgba(253, 91, 140, 0.05) 63.6%,
      rgba(255, 90, 153, 0.05) 75.16%
    );
  }

  // min-height: ${(props) => (props.appeal ? '105px' : 'none')};
`;

export const InputFeedbackErrorHint = styled.span`
  margin-left: 16px;
  color: #eb3838;
  font-weight: 500;
  font-size: 12px;
`;

export const InputAppeal = styled(InputFeedback)`
  font-family: var(--inter);
  min-height: 105px;
  padding: 16px 0 72px 16px;
`;

export const blackHover = css`
  background: ${({ theme }) => theme.orangeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const stdHover = css`
  background: ${({ theme, done }) => (done ? theme.greenGradientInvert : theme.orangeGradientInvert)};
`;

export const FeedbackButton = styled.input`
  cursor: pointer;
  width: 270px;
  height: 35px;
  font-family: var(--noto-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: none;

  margin: 0;
  margin-top: 8px;
  column-gap: 8px;

  background: ${({ done, theme }) => (done ? theme.greenGradient : theme.orangeGradient)};

  path {
    fill: ${({ theme }) => theme.color};
  }

  &:hover > div {
    ${({ black }) => black && blackHover}
  }

  &:hover {
    ${({ black }) => !black && stdHover};
  }

  &:hover path {
    fill: url(#orangeGradient);
  }

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 1000px) {
    width: 326px;
  }
  @media (max-width: 450px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const MarkIconStyled = styled(MarkIcon)`
  position: absolute;
  top: -30px;
  right: 30px;
`;

export const MarkWrapper = styled.div`
  display: ${({ done }) => (done ? 'flex' : 'none')};
  position: relative;
`;
