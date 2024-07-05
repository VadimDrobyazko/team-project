export interface Photo {
  id: string;
  created_at: Date;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip;
}

export interface Tip {
  id: string;
  created_at: Date;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}
