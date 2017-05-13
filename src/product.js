/* @flow */

/**
 * 製品情報関連の処理をまとめたもの
 *
 * @author y.takeuchi
 */

/** 製品情報 */
export type Product = {
  /** ユニークID */
  id: number,

  /** 商品名 */
  name: string,

  /** 値段 */
  price: number,

  /** 商品タイプ */
  productType: string,

  /** タグ */
  tag: string[],
}

/** 製品のサマリー情報 */
export type Summary = {
  /** タイトル */
  title: string,

  /** サマリー内容 */
  description: string,
}

/**
 * 製品情報からサマリーを生成する
 *
 * @param product 製品情報
 * @return サマリー情報
 */
export function createSummary(product: Product): Summary {
  return {
    title: `【${product.productType}】${product.name}`,
    description: `${product.price}円 タグ${product.tag.join(",")}`,
  };
}

/**
 * 製品タグの配列を文字列に変換する
 *
 * @param product 製品情報
 * @return タグを・で繋げた文字列
 */
export function createTags(product: Product): string {
  return product.tag.join('・');
}