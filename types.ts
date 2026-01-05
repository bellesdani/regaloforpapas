
export enum AppState {
  IDLE = 'IDLE',
  ANIMATING = 'ANIMATING',
  REVEALED = 'REVEALED'
}

export interface SurpriseDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  from: string;
}
