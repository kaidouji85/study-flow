/** @flow */
import type {Product, Summary} from './product';
import type {PurchaceInfo} from './purchace';
import {createSummary} from './product';
import {getTotalPrice} from './purchace';


/** デモ用商品データ */
const DummyData: Product[] = [
  {
    id: 1,
    name: 'カレーパン',
    price: 120,
    productType: 'food',
    tag: ['パン', 'カレー', '辛い']
  },
  {
    id: 2,
    name: 'こだわり食パン',
    price: 100,
    productType: 'food',
    tag: ['パン', '高級小麦']
  },
  {
    id: 3,
    name: '小倉餡パン',
    price: 150,
    productType: 'food',
    tag: ['パン', '小倉餡', '京都']
  },
  {
    id: 4,
    name: '消しゴム',
    price: 70,
    productType: 'stationery',
    tag: ['文房具', '消しゴム']
  },
  {
    id: 5,
    name: '鉛筆',
    price: 10,
    productType: 'stationery',
    tag: ['文房具', '鉛筆']
  },
  {
    id: 6,
    name: 'ボールペン',
    price: 120,
    productType: 'stationery',
    tag: ['文房具', 'ボールペン']
  },
];

/** デモ用購入データ */
const DummyPurchaseInfoList: PurchaceInfo[] = [
  {
    productId: 1,
    count: 3,
  },
  {
    productId: 3,
    count: 2,
  },
  {
    productId: 4,
    count: 4,
  },
  {
    productId: 5,
    count: 10,
  },
];


window.onload = () => {
  // 製品一覧を表示
  console.log('製品一覧を表示');
  DummyData.forEach(console.log);

  // 製品のサマリーを表示
  console.log('製品のサマリーを表示');
  const SummryList: Summary[] = DummyData.map(createSummary);
  SummryList.forEach(console.log);

  // 製品の合計金額を表示
  console.log('購入情報を表示');
  console.log(DummyPurchaseInfoList);

  console.log('合計金額を表示');
  const totalPrice: number = getTotalPrice(DummyPurchaseInfoList, DummyData);
  console.log(totalPrice);
}