import { Lang } from './lang';
import { Server } from './server';

export interface User {
  readonly Id: number;
  readonly Pseudo: string;
  readonly Lang: Lang;
  readonly Server: Server;
}
