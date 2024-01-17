const options: any = {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone: 'GMT',
  timeZoneName: 'short',
};

export const formatDate = (dateString: string, hours: number) => {
  const shiftedStringDate = shiftTimeByHours(dateString, hours);

  const date = new Date(shiftedStringDate);
  return date.toLocaleString('ru-RU', options).replace('UTC', 'GMT+3');
};

const shiftTimeByHours = (dateString: string, hours: number) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() + hours);
  return date.toISOString();
};
