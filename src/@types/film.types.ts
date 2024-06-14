export interface IFilm {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}
export interface ILocationState extends IFilm {}
