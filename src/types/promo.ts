export interface PromoData {
  adds: { total: number; data: any[] };
  events: {
    total: number;
    data: {
      promoType: { name: string; id: number };
      promoLocation: { name: string; id: number };
      promoImage: null;
      id: number;
      priority: null;
      event: {
        eventImage: null;
        name: string;
        eventDescription: { short: null; id: number; full: string };
        id: number;
        eventType: { name: string; id: number };
      };
    }[];
  };
  news: {
    total: number;
    data: {
      news: {
        newsImage: null;
        name: string;
        description: string;
        id: number;
        newsType: { name: string; description: string; id: number };
      };
      promoType: { name: string; id: number };
      promoLocation: { name: string; id: number };
      promoImage: null;
      id: number;
      priority: number;
    }[];
  };
}
