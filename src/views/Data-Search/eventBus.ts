import mitt from 'mitt';
import type { Aggregations,Item } from './api';

// 定义所有可能的事件类型和数据结构
interface Events {
  eventForSelect: Aggregations; // eventForSelect 事件的回调数据类型是 Aggregations
  eventForCard: Item[];         // eventForCard 事件的回调数据类型是 Items
  [key: string]: unknown;      // 添加一个字符串索引签名
  [key: symbol]: unknown;      // 添加 symbol 索引签名
}

// 创建事件总线
export const eventBus = mitt<Events>();
