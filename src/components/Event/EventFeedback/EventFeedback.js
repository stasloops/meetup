'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import {
  FeedbackForm,
  FeedbackIconBox,
  FeedbackInputForm,
  FeedbackText,
  InputFeedback,
  InputFeedbackWrapper,
  FeedbackButton,
  MarkWrapper,
  MarkIconStyled,
  InputFeedbackErrorHint,
  FeedbackIconBoxIn,
  InputFeedbackMessage,
} from './EventFeedbackStyle';
import { sendFeedBackData } from '../../../data/api/feedBackApi';

export function EventFeedback({ feedbackMobile }) {
  const defaultValues = {
    contacts: '',
    theme: '',
    message: '',
  };

  const [formData, setFormData] = useState(defaultValues);
  const [captcha, setCaptcha] = useState(false);
  const [send, setSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  const SITE_KEY = '6Le04rsjAAAAAGdD8S6_xIjq99oISPL9IXB_qgEE';

  const sendMessage = () => {
    sendFeedBackData(formData)
      .then((res) => res)
      .catch(() => {});
    setCaptcha(false);
  };

  const OpenCaptcha = () => {
    setCaptcha(true);
    setSend(true);
  };

  const ResetForm = () => {
    setSend(false);

    setFormData(defaultValues);
    reset();
  };

  const onSubmit = () => {
    return send ? ResetForm() : OpenCaptcha();
  };

  return (
    <FeedbackForm captchaOpen={!!captcha} feedbackMobile={feedbackMobile}>
      <FeedbackIconBox captchaOpen={!!captcha}>
        {/* <FeedbackIcon /> */}
        <FeedbackIconBoxIn>
          <Image src="/assets/svg/feedback.svg" layout="fill" alt="feedback" />
        </FeedbackIconBoxIn>
      </FeedbackIconBox>
      {captcha && <ReCAPTCHA style={{ transform: 'scale(0.9)' }} sitekey={SITE_KEY} size="normal" onChange={sendMessage} />}
      <FeedbackText captchaOpen={!!captcha}>
        <div>Оставьте обратную связь о нашем сервисе</div>
        <FeedbackInputForm onSubmit={handleSubmit(onSubmit)}>
          <InputFeedbackWrapper checkForm={errors?.theme}>
            <InputFeedback
              {...register('theme', {
                required: true,
                onChange: (e) => {
                  setFormData({ ...formData, theme: e.target.value });
                },
              })}
              maxLength="20"
              placeholder="Как к вам обращаться? (20 символов)"
              value={formData.theme}
              autoComplete="off"
            />
          </InputFeedbackWrapper>
          {errors?.theme && <InputFeedbackErrorHint>Это поле необходимо заполнить</InputFeedbackErrorHint>}
          <InputFeedbackWrapper checkForm={errors?.contacts}>
            <InputFeedback
              {...register('contacts', {
                required: true,
                onChange: (e) => {
                  setFormData({ ...formData, contacts: e.target.value });
                },
              })}
              placeholder="Контакт (100 символов)"
              maxLength="100"
              value={formData.contacts}
              autoComplete="off"
            />
          </InputFeedbackWrapper>
          {errors?.contacts && <InputFeedbackErrorHint>Это поле необходимо заполнить</InputFeedbackErrorHint>}
          <InputFeedbackWrapper checkForm={errors?.message}>
            <InputFeedbackMessage
              {...register('message', {
                required: true,
                minLength: 5,
                onChange: (e) => {
                  setFormData({ ...formData, message: e.target.value });
                },
              })}
              placeholder="Обращение (256 символов)"
              rows={5}
              maxLength="256"
              value={formData.message}
            />
          </InputFeedbackWrapper>
          {errors?.message && errors?.message.type === 'minLength' && (
            <InputFeedbackErrorHint>Сообщение должно быть длинее 5 символов</InputFeedbackErrorHint>
          )}
          {errors?.message && errors?.message.type === 'required' && <InputFeedbackErrorHint>Это поле необходимо заполнить</InputFeedbackErrorHint>}

          <FeedbackButton done={send} type="submit" value={send ? 'Сообщение отправлено' : 'Отправить'} />
          <MarkWrapper done={send}>
            <MarkIconStyled />
          </MarkWrapper>
        </FeedbackInputForm>
      </FeedbackText>
    </FeedbackForm>
  );
}
