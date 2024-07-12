import useData from "./useData";
import platform from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_backgroud: string;
  image: string | null;
  year_start: number;
  year_end: number;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

// const usePlatform = () => useData<ParentPlatform>("/platforms/lists/parents");
const usePlatform = () => ({ data: platform, isLoading: false, error: null });

export default usePlatform;
