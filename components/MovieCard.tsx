import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { imagePath } from "@/services/api"

const MovieCard = ({movie} : any) => {
  return (
    <div className="">
        <Card className="overflow-hidden">
            <CardContent className="h-[250px] p-0">
                <Image
                    src={`${imagePath}${movie?.poster_path}`} alt={movie.name} 
                    width={150} height={150}
                    className="w-full h-full object-cover"
                />
            </CardContent>
        </Card>
    </div>
  )
}

export default MovieCard