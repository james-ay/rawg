import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>("/genres");

//   {
//   const [genres, setGenre] = useState<Genre[]>([]);
//   const [error, setError] = useState();
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenre(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

export default useGenres;
