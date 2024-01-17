import Image from 'next/image';
import { ButtonOnMainPage } from '../Kit/Button/Button';
import {
  SliderPhonePng,
  SliderCardPhoneBg,
  SliderContentWrapper,
  SliderCardPhone,
  AboutSlider,
  AboutSliderInfo,
  SliderInfoTitle,
  SliderInfoHeader,
  SliderInfoBody,
  SliderInfoSvgCircle,
  AboutLink,
} from './AboutSliderStyle';

export default function AboutSliderWrapper() {
  return (
    <SliderContentWrapper>
      <AboutSlider>
        <AboutSliderInfo>
          <SliderInfoTitle>GOMEETUP</SliderInfoTitle>
          <SliderInfoHeader>Агрегатор событий из мира IT</SliderInfoHeader>
          <SliderInfoBody>
            Здесь собраны мастер-классы, вебинары, конференции и другие ивенты — то, что будет интересно всем IT-специалистам, от новичков до
            бизнес-руководителей.
          </SliderInfoBody>
          <ButtonOnMainPage>
            <AboutLink href="#about-id">Далее</AboutLink>
          </ButtonOnMainPage>
          <SliderInfoSvgCircle>
            <Image src="/assets/svg/slider-sircle.svg" layout="fill" alt="about gomeetup" />
          </SliderInfoSvgCircle>
        </AboutSliderInfo>
        <SliderCardPhone>
          <SliderCardPhoneBg>
            <SliderPhonePng>
              <Image src="/img/slider-phone.png" layout="fill" alt="about slider phone" />
            </SliderPhonePng>
          </SliderCardPhoneBg>
        </SliderCardPhone>
      </AboutSlider>
    </SliderContentWrapper>
  );
}
