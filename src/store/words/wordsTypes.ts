export interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner?: string;
  progress?: number;
}
export interface WordsResponse {
  results: Word[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface WordsState {
  isLoading: boolean;
  error: string | null;
  categories: string[];
  wordsAll: WordsResponse;
  wordsOwn: Word[];
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
  totalPages: number;
  page: number;
  perPage: number;
}
