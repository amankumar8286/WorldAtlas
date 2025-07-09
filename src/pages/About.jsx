import CountryFacts from "../components/CountryFacts";
import { AppLayout } from "../components/Layout/AppLayout";
import { Headers } from "../components/UI/Headers";

export const About = () => {
    return <AppLayout> 
    <section className="section-about container">
        
        <h2 className="container-title">
            Here are the Intresting Facts
            <br />
            we're proud of
        </h2>
        <CountryFacts />
    </section>
    </AppLayout>

};
