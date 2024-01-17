import React, { useState } from 'react';
import { Button, ButtonBox, Container, Cookies, Description, Icon, MessageBox, MobileBlock, Title } from './Cookies';
import CookiesIcon from '../../data/assets/svg/cookies_2.svg';
import { storage } from '../../helpers/storage';

function CookiesPanel() {
  const initialIsActive = () => {
    if (typeof storage.get('cookies_is_connect') !== 'boolean') {
      if (typeof window === 'undefined') {
        return false;
      }
      return true;
    }
    return !storage.get('cookies_is_connect');
  };
  const [isActive, setIsActive] = useState(initialIsActive());

  const agreeToСookies = () => {
    setIsActive(false);
    storage.set('cookies_is_connect', true);
  };
  return (
    <Cookies style={{ display: !isActive ? 'none' : '' }}>
      <Container>
        <Icon>
          <CookiesIcon />
        </Icon>
        <MobileBlock>
          <MessageBox>
            <Title>Этот сайт использует cookie файлы для хранения данных.</Title>
            <Description>Оставаясь на сайте, вы даете согласие на работу с этими файлами.</Description>
          </MessageBox>
          <ButtonBox>
            <Button onClick={agreeToСookies}>OK</Button>
          </ButtonBox>
        </MobileBlock>
      </Container>
    </Cookies>
  );
}

export default CookiesPanel;
