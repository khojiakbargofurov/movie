import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
const HomeView = () => {
  return (
    <>
      <div className="flex items-center">
        <Search color="#ffffff" />
        <Input type="email" placeholder="Search for movies or TV series" />
      </div>
      <h1 className="text-white font-semibold text-lg py-8">
        Trending
      </h1>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-8">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </Carousel>
      <h1 className="text-white font-semibold text-lg py-8">
        Recommended for you
      </h1>
      
    </>  
  )
}

export default HomeView;
