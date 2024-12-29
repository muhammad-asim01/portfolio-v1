import Container from "@/components/Container";
import HomeDescripton from "@/components/HomeDescripton";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { infoAboutMe } from "@/constants";
import { Download, Languages } from "lucide-react";

export default function Home() {
  
  

  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Muhammad Asim
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescripton />
            </div>
          </div>
          <div className="mt-6">
            {Object.entries(infoAboutMe).map(([key, { title, items }]) => (
              <div key={key} className="mb-4">
                <Title>{title}</Title>
                {items.map((highlight, i) => (
                  <Badge key={i} variant="secondary" className="mr-2">
                    {highlight}
                  </Badge>
                ))}
              </div>
            ))}
          </div>


          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect">
            <a
              href="/cv/muhammad_asim-cv.docx"
              download
              className="flex gap-2 items-center"
            >
              Download cv <Download />
            </a>
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
}
