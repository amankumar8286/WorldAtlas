import { Headers } from "../components/UI/Headers";
import { FaArrowCircleRight } from "react-icons/fa";
import { About } from "./About";
import { HeroSection } from "../components/UI/HeroSection";
import { AppLayout } from "../components/Layout/AppLayout";
import CountryFacts from "../components/CountryFacts";
export const Home = () => {
    return (
        <AppLayout>
        
        <HeroSection />
        <CountryFacts />


        </AppLayout>

    )}