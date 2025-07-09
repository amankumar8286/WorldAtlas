import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { AppLayout } from "../components/Layout/AppLayout";
export const  Country = () => {

const [isPending, startTransition] = useTransition()
const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData();

            setCountries(res.data);
        })
    }, []);

if (isPending)return < Loader />;


    return <AppLayout>
         <section className="country-section">

        <ul className="grid grid-four-cols">{
            countries.map((curCountry,index) => {
                return <CountryCard country = {curCountry} key={index} />;
            })}
        </ul>

    </section>
    </AppLayout>
};