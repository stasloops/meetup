import VKIcon from '../../../../data/assets/svg/vk.svg';
import TelegramIcon from '../../../../data/assets/svg/telegram.svg';
import { copyTextToClipboard } from './copyTextToClipBoard';
import { shareMail, shareTelegram, shareVK } from './socialShare';
import { ShareLinkIconThemed } from '../../../kit/ThemedSvg/ShareLinkIconThemed';
import { MailIconThemed } from '../../../kit/ThemedSvg/MailIconThemed';

export const linkList = [
  {
    title: 'Копировать ссылку',
    icon: ShareLinkIconThemed,
    action: copyTextToClipboard,
  },
  {
    title: 'ВКонтакте',
    icon: VKIcon,
    action: shareVK,
  },
  {
    title: 'Telegram',
    icon: TelegramIcon,
    action: shareTelegram,
  },
  {
    title: 'Почта',
    icon: MailIconThemed,
    action: shareMail,
  },
];
