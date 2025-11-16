import Banner from "@/components/home/Banner";
import ChooseUs from "@/components/home/ChooseUs";
import CoreSectors from "@/components/home/CoreSectors";
import Header from "@/components/home/Header";
import SubHeader from "@/components/home/SubHeader";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <CoreSectors />
      <ChooseUs />
      <Banner />
    </>
  );
}
