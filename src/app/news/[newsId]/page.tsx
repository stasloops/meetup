import React from 'react';
import { formatDate } from '../../../helpers/formatDate';
import { NewsData } from '../../../types/news';
import AvatarIcon from '../../../data/assets/svg/avatar.svg';

const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:4000' : 'https://gomeetup.ru';

async function getNews(newsId: string): Promise<NewsData> {
  const res = await fetch(`${baseUrl}/api/news/${newsId}`);
  const data = await res.json();
  return data;
}

interface NewsProps {
  params: { newsId: string };
}
export default async function News({ params }: NewsProps) {
  const news = await getNews(params.newsId);

  return (
    <div className="md:bg-[#fff] min-h-[70vh]  md:p-[64px] md:text-[#000] relative top-[-50px] md:top-0">
      <h1 className="text-[28px] md:text-[32px] font-hoves_500 font-[500] text-black dark:text-white dark:md:text-black">{news.name}</h1>
      <div className="flex flex-col md:flex-row gap-[16px] mt-[24px] md:mt-0">
        {/* <div className="w-[32px] h-[32px] bg-gray-600"></div> */}
        <AvatarIcon />
        <div>
          <div className="text-purple text-[16px] font-hoves_500">Елена Светлановна</div>
          <div className="text-smText text-[14px] font-inter font-[400]">CEO однодневки</div>
        </div>
        <span className="text-purple hidden md:inline">•</span>
        <div className="text-purple text-[16px] font-[400] font-inter uppercase">{formatDate(news.createdAt, 3)}</div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: news.description }}
        style={{ whiteSpace: 'pre-wrap' }}
        className="text-black dark:text-white dark:md:text-black opacity-[0.8] text-[21px] md:text-[24px] font-[400] font-hoves_500 mt-[24px]"
      />
    </div>
  );
}
