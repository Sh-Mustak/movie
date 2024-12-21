import HeroSection from "@/components/HeroSection";
import MovieLists from "./movieList/page";
import Test from "@/components/Test";



export default async function Home() {

  return (
    <>

      <Test >
        <HeroSection />
        <MovieLists />
      </Test>

    </>

  );
}
