import { Carousel } from "@/components/ui/carousel";
export default function CarouselComponent({ images }) {
  return <Carousel images={images} className="w-80 h-60 mb-6" />;
}