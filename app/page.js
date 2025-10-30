import HeroSlider from "@/components/HeroSlider";
import Prediction2026 from "@/components/Prediction2026";
import PrashanKundali from "@/components/PrashanKundali";
import LearnJyotish from "@/components/LearnJyotish";
import LifePrediction from "@/components/LifePrediction";
import Gemstones from "@/components/Gemstones";
import DailyHoroscope from "@/components/DailyHoroscope";
import AstrologyServices from "@/components/AstrologyServices";
import Testimonials from "@/components/Testimonials";
import "./globals.css";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <DailyHoroscope />
      <Prediction2026 />
      <PrashanKundali />
      <LifePrediction />
      <Gemstones />
      <LearnJyotish />
      <AstrologyServices />
      <Testimonials />
    </>
  );
}
