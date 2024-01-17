export interface EventData {
  id: number;
  name: string;
  date: string;
  link: string;
  eventDescription: { short: null; id: number; full: string };
  eventType: { name: string; id: number };
  eventComplexity: null;
  eventFormat: { name: string; id: number };
  eventImage: null;
  eventLocation: null;
  eventPayment: { high: null; low: null; base: number };
  eventOrganizer: { image: null; imageS: null; name: string; description: null; id: number; imageL: null; url: string };
  eventThemeTags: { eventTheme: { name: string; description: string; id: number } }[];
  eventSource: { name: string; id: number; url: string };
}
