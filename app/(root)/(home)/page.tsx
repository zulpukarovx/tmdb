import TrendingCarousel from "@/components/TrendingCarousel"
import { fetchTrendings, imagePath } from "@/services/api"


const Page = async () => {

  const { data } = await fetchTrendings('day')
  const movies = data?.results || []

  return (
    <main className='flex justify-center mx-auto paddings
    w-full max-w-screen-2xl flex-col'>
      <section className='w-full py-8'>
        <TrendingCarousel movies={movies} />
        {/* {movies.map((movie: any) => (
          <Image 
            key={movie.id}
            src={`${imagePath}${movie?.poster_path}`}
            alt={movie.name}
            width={20}
            height={35}
          />
        ))} */}
      </section>
    </main>
  )
}

export default Page