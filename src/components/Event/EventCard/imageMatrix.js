const imagePathByType = {
  Конференция: 'conference.svg',
  Форум: 'forum.svg',
  Тренинг: ['training.svg', 'training2.svg', 'training3.svg', 'training4.svg'],
  Соревнование: 'competition.svg',
  Курс: 'course.svg',
  Хакатон: 'hackathon.svg',
  Фестиваль: 'festival.svg',
  Вебинар: 'webinar.svg',
  Митап: ['meetUp.svg', 'meetUp2.svg'],
  Интенсив: 'intensive.svg',
  'Мастер-класс': ['masterClass.svg', 'masterClass2.svg', 'masterClass3.svg'],
  Турнир: 'tournament.svg',
  Мастерская: 'workShop.svg',
  Воркшоп: 'workshop_2.svg',
  Встреча: 'meet.svg',
  Выствка: ['exhibition.svg', 'exhibition2.svg'],
  Лекция: 'lecture.svg',
  Марафон: 'marathon.svg',
  Конкурс: 'contest.svg',
  'Круглый стол': 'roundTable.svg',
  default: 'other.svg',
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getCardImagePath = (type) => {
  const img = imagePathByType[type] || imagePathByType.default;
  if (!Array.isArray(img)) return `/assets/svg/cards/${img}`;
  const rndImg = img[randomInteger(0, img.length - 1)];
  return `/assets/svg/cards/${rndImg}`;
};
