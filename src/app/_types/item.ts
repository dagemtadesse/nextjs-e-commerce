export interface Item {
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  uuid: string;
  name: string;
  body: null | string;
  collectionId: 2431;
  key: string;
  seq: number;
  entityType: number;
  entityId: number;
  optionKey: null;
  publication: {
    id: number;
    title: number;
    code: number;
    productId: 4868;
    prdType: 1;
    detailEntity: number;
    offeringType: number;
    rating: 4.4;
    isExistResidual: true;
    isAdult: 1;
    preface: number;
    prefaceIconUrl: number;
    productName: number;
    brandName: number;
    media: {
      seq: 0;
      type: number;
      uri: string;
      mimeType: number;
      deviceType: null | string;
    }[];
    isTrial: true;
    tagsOnImage: string[];
    tagsOnDesc: string[];
    priceInfo: {
      price: number;
      discountRate?: number;
    };
    discounts: [];
    applyCoupon: true;
  };
  prdType: number;
}
