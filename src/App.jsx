import { Button } from "@material-tailwind/react"
import Hero from "./components/blocks/Hero"
import VideoFrame from "./components/blocks/VideoFrame"
import Container from "./components/Container"
import Header from "./components/layouts/Header"
import Card from "./components/ui/Card"
import { cards } from "./data/home/aboutCards"
import { data } from "./data/home/hero"


function App() {
  return (
    <>
      
        <Header/>
        <Hero></Hero>
        
        <Container>
          <div className="grid  gap-10 md:grid-cols-3">
            {
              cards.map((card,idx)=>(
                <Card key={idx} {...card}></Card>
              ))
            }
          </div>
        </Container>
        <VideoFrame />
      
    </>
  )
}

export default App
