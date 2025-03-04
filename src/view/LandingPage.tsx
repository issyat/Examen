import ContentSection from "../component/ContentSection";
import DetailsSections from "../component/DetailsSections";
import Footer from "../component/Footer";
import FromAnyDeviceSection from "../component/FromAnyDeviceSection";
import Header from "../component/Header";
import IncludesSection from "../component/IncludesSection";
import ReferSection from "../component/ReferSection";
import WhyChooseUsSection from "../component/WhyChooseUsSection";


const LandingPage = () => {
    return (
        <>
            <Header />
            <WhyChooseUsSection />
            <FromAnyDeviceSection />
            <DetailsSections />
            <ContentSection />
            <IncludesSection />
            <ReferSection />
            <Footer />
        </>
    );
}

export default LandingPage;