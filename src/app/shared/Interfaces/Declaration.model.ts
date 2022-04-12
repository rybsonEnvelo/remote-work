import { DeclarationType } from '../enums/DeclarationType.enum';

export interface Declaration {
  id: number;
  declarationType: DeclarationType;
  day: string;
}
