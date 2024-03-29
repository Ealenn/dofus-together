import { Lang } from './lang';

export interface Server {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Lang: Lang;
}
