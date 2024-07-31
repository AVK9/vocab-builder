export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
  owner?: string;
  progress?: number;
}

export interface WordsResponse {
  results: Word[];
  sumResults?: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface WordsState {
  isLoading: boolean;
  error: string | null;
  categories: string[];
  totalCount: number;
  wordsAll: WordsResponse;
  wordsOwn: WordsResponse;
}

export interface getWordsAllData {
  keyword: string;
  category: string;
  isIrregular: boolean;
  page: number;
  limit: number;
}

export interface getWordsAllApiResponse {
  results: Word[];
  sumResults?: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface ApiError {
  message: string;
}

// export interface OwnWord {
//   _id: string;
//   en: string;
//   ua: string;
//   category: string;
//   isIrregular: boolean;
//   owner: string;
//   progress: number;
// }
export interface getWordsData {
  keyword: string;
  category: string;
  isIrregular: boolean;
  page: number;
  limit: number;
}

export interface getWordsResponse {
  results: Word[];
  sumResults?: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface DellWord {
  message: string;
  id: string;
}
export interface EditWord {
  id?: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
}

export interface TotalCountResponse {
  totalCount: number;
}

export interface CreateWordReq {
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
}

export interface CreateWordResp {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
  owner?: string;
  progress?: number;
}
