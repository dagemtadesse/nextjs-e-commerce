export interface Banner {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: null;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}
