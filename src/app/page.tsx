'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'inter-ui/inter.css';
import '../styles/fonts.css';
import '../styles/index.css';
import 'dayjs/locale/ru';
import { userService } from '../services/user.service';

export default function ({ Component, pageProps }: any) {
  dayjs.locale('ru');
  dayjs.extend(utc);

  const router = useRouter();
  const path = usePathname();
  const [authorized, setAuthorized] = useState(false);

  const authCheck = useCallback(
    (url: any) => {
      const publicPaths = ['/login'];
      const path = url.split('?')[0];
      if (!userService.userValue && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push('/login');
      } else {
        setAuthorized(true);
      }
    },
    [router],
  );

  useEffect(() => {
    const win: any = window;
    win.dataLayer = win.dataLayer || [];
    win.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer.push(arguments);
    };
    win.gtag('js', new Date());
    win.gtag('config', 'G-9E6RVYNWB7');
  }, []);

  useEffect(() => {
    authCheck(path);
  }, [authCheck, path]);
  return <>{authorized && <Component {...pageProps} />}</>;
}
