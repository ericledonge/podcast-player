export interface Podcast {
  id: number;
  name: string;
}

export interface PodcastFromUserList extends Podcast {
  listened: boolean;
}
