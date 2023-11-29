import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <div>
      {/* Anime paling populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Rekomendasi anime */}
      <section>
        <Header title="Rekomendasi" linkHref="/populer" />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  );
};

export default Page;
