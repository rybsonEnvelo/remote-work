import { DeclarationType } from '../enums/DeclarationType.enum';

export interface CalendarEvent {
  date: string;
  display: string;
  backgroundColor: string;
  title: string;
  type: DeclarationType;
}
