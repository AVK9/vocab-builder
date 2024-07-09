export interface WordsState {
  isLoading: boolean;
  error: string | null;
  categories: string[] | null;
}

export interface GetWordsCategoriesResponse {
  email: string;
  name: string;
  token: string;
}

export type StringArray = string[];
