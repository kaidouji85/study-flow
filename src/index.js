/** @flow */
import type {Product, Summary} from './product';
import {createSummary, createTags} from './product';

/** デモ用商品データ */
const DummyData: Product[] = [
  {
    id: 1,
    name: 'カレーパン',
    price: 120,
    productType: 'food',
    tags: ['パン', 'カレー', '辛い']
  },
  {
    id: 2,
    name: 'こだわり食パン',
    price: 100,
    productType: 'food',
    tags: ['パン', '高級小麦']
  },
  {
    id: 3,
    name: '小倉餡パン',
    price: 150,
    productType: 'food',
    tags: ['パン', '小倉餡', '京都']
  },
  {
    id: 4,
    name: '消しゴム',
    price: 70,
    productType: 'stationery',
    tags: ['文房具', '消しゴム']
  },
  {
    id: 5,
    name: '鉛筆',
    price: 10,
    productType: 'stationery',
    tags: ['文房具', '鉛筆']
  },
  {
    id: 6,
    name: 'ボールペン',
    price: 120,
    productType: 'stationery',
    tags: ['文房具', 'ボールペン']
  },
];


window.onload = () => {
  DummyData.forEach(console.log);
}