import {data} from "../../data/home/hero" 
import Container from "../Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <Container disableYPadding={true}>
      <div className="flex flex-col lg:flex-row bg-[#f9f3ef] gap-20 items-center rounded-xl p-10 lg:p-32 ">
        <div className="lg:w-1/2 space-y-8">
        <div className="space-y-5">
          <h1 className="lg:text-5xl xl:text-6xl md:text-4xl sm:text-3xl text-2xl text-primary font-bold leading-snug">{data.title}</h1>
          <p className="text-primary/80">{data.summary}</p>
        </div>
        <Button invert={data.button.invert}>{data.button.label}</Button>
        </div>
        <div className="lg:w-1/2">
        <img src={data.image} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </Container>
  )
}
