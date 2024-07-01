import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MovieCard from "./MovieCard"

const TrendingCarousel = ({movies}: any) => {
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto px-6
        xs:px-8 sm:px-16">
        <CarouselContent>
            {movies.map((movie: any) => (
                <CarouselItem 
                    key={movie.id}
                    className="sm:basis-1/4 md:basis-1/5 lg:basis-1/6 basis-1/2"
                >
                    <MovieCard movie={movie} />
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}

export default TrendingCarousel