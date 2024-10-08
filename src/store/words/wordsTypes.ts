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
  totalPages: number;
  page: number;
  perPage: number;
}

export interface WordsState {
  isLoading: boolean;
  error: string | null;
  categories: string[];
  wordsTasks: WordTask[];
  wordsAnswers: Answer[];
  totalCount: number;
  wordsAll: WordsResponse;
  wordsOwn: WordsResponse;
}

export interface getWordsAllData {
  keyword: string;
  category: string;
  isIrregular?: boolean;
  page?: number;
  limit?: number;
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

export interface getWordsData {
  keyword: string;
  category: string;
  isIrregular?: boolean;
  page?: number;
  limit?: number;
}

export interface getWordsResponse {
  results: Word[];
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
  isIrregular?: boolean;
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

export interface UaTask {
  _id: string;
  ua: string;
  task: 'en';
}

export interface EnTask {
  _id: string;
  en: string;
  task: 'ua';
}
export type WordTaskUaEn = UaTask | EnTask;
export type WordsTasksExams = WordTaskUaEn[];

export interface WordTask {
  _id: string;
  ua?: string;
  en?: string;
  task: string;
}

export interface WordsTasksResp {
  tasks: WordTask[];
}

export interface Answer {
  _id: string;
  en?: string;
  ua?: string;
  task: string;
  isDone?: boolean;
}

export type AnswersWordsResp = Answer[];
export type AnswersWordsReq = Answer[];
