export interface IModal {
    isOpen: boolean;
    url: string;
    description: string;
  }
  
  interface IImageLinks {
    self: string;
    html: string;
    download: string;
  }
  
  interface IImageUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  
  interface IAuthor {
    bio: string;
    firstName: string;
    isForHire: boolean;
    id: string;
    instagramUsername: string;
    lastName: string;
    links: {
      self: string;
      html: string;
      portfolio: string;
      likes: string;
      photos: string;
    };
    location: string;
    fullName: string;
    portfolioUrl: string;
    profileImage: {
      small: string;
      medium: string;
      large: string;
    };
    totalCollections: number;
    totalIllustrations: number;
    totalLikes: number;
    totalPhotos: number;
    totalPromotedIllustrations: number;
    totalPromotedPhotos: number;
    twitterUsername: string;
    updatedAt: string;
    username: string;
  }
  
  export interface IPicture {
    altDescription: string;
    assetType: string;
    blurHash: string;
    color: string;
    createdAt: string;
    userCollections: any[];
    description: string;
    height: number;
    id: string;
    isLikedByUser: boolean;
    likesCount: number;
    links: IImageLinks;
    promotedAt: string;
    tags: any[];
    updatedAt: string;
    urls: IImageUrls;
    author: IAuthor;
    width: number;
  }
  
  export interface ISearchResults {
    totalResults: number;
    totalPages: number;
    images: IPicture[];
  }
  
  export type TSearchHandler = (newQuery: string) => void;
  
  export type TLoadMoreHandler = () => void;
  
  export type TImageClickHandler = (image: IPicture) => void;
  
  export type TModalCloseHandler = () => void;
  
  export interface ILoadImagesOptions {
    query: string;
    page?: number;
    perPage?: number;
    orderBy?: string;
    color?: string;
    orientation?: string;
  }
  
  export interface ILoadImagesResponse {
    totalResults: number;
    totalPages: number;
    images: IPicture[];
  }
  