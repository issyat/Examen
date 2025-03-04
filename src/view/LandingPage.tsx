import DetailsSections from "../component/DetailsSections";
import FromAnyDeviceSection from "../component/FromAnyDeviceSection";
import Header from "../component/Header";
import WhyChooseUsSection from "../component/WhyChooseUsSection";


const LandingPage = () => {
    return (
        <>
            <Header />
            <WhyChooseUsSection />
            <FromAnyDeviceSection />
            <DetailsSections />
        </>
    );
}

export default LandingPage;