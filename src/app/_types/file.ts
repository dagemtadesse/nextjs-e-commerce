export interface File {
  createdAt: string;
  updatedAt: string | null;
  deletedAt: null;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType: null;
  collectionId: number;
  seq: number;
  itemKey: null;
  type: string;
}
