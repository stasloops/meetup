import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import moment from 'moment';
import 'log-timestamp';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Modal from 'react-modal';
import { MainLayout } from '../components/MainLayout';
import 'inter-ui/inter.css';
import '../styles/fonts.css';
import '../styles/index.css';
import { GlobalStyles } from '../styles/blocks/GlobalStyles';
import 'dayjs/locale/ru';
import { userService } from '../services/user.service';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
  dayjs.locale('ru');
  dayjs.extend(utc);

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const isAbout = router.asPath === '/about';

  const authCheck = useCallback(
    (url) => {
      const publicPaths = ['/login'];
      const path = url.split('?')[0];
      if (!userService.userValue && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath },
        });
      } else {
        setAuthorized(true);
      }
    },
    [router],
  );

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-9E6RVYNWB7');
  }, []);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [authCheck, router.asPath, router.events]);

  return (
    <MainLayout>
      <GlobalStyles isAbout={isAbout} />
      {authorized && <Component {...pageProps} />}
    </MainLayout>
  );
}

export default MyApp;
