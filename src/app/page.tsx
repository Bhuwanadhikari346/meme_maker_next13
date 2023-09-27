import { Footer, Header, HeroSection } from "@/Components";
import DashboardLayout from "./DashboardLayout";

const Home = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <HeroSection />
        <Footer />
      </DashboardLayout>
    </>
  );
};
export default Home;
