/** @flow */
import type {Product} from './product';

/** 購入情報 */
export type PurchaceInfo = {
  /** 製品ID */
  productId: number,

  /** 購入する数 */
  count: number
};

/**
 * 購入関連の処理をまとめたもの
 *
 * @author y.takeuchi
 */

/**
 * 購入情報から合計金額を計算して返す
 *
 * @param purchaceInfoList 購入情報
 * @param productList 製品リスト
 * @return 合計金額
 */
export function getTotalPrice(purchaceInfoList: PurchaceInfo[], productList: Product[]): number {
  const getPrice = (purchace: PurchaceInfo) => {
    const product = productList.find((product: Product) => product.id === purchace.productId) || {};
    return product.price || 0;
  };

  return purchaceInfoList.map((purchace: PurchaceInfo) => {
    const price = getPrice(purchace);
    const count = purchace.count || 0;
    return price * count;
  }).reduce((prev: number, now: number) => prev + now);
}