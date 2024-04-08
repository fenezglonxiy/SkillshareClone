import HomeHero from "../modules/home/hero/components/HomeHero";
import PageWrapper from "../modules/page-wrapper/components/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper title="Online classes for Creatives | Skillshare">
      <main>
        <HomeHero />
      </main>
    </PageWrapper>
  );
};

export default HomePage;
