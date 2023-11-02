import Gallery, { Gallery2, Gallery3 } from "@/components/gallery/Gallery"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gallery/>
     
      <Gallery2/>


      <Gallery3/>
    </main>
  )
}
