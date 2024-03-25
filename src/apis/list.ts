import { http } from '@/utils';

import { ResType } from './shared';

type ChannelItem = {
  id: number,
  name:string
}
type ChannelRes = {
  channels:ChannelItem[]
}

