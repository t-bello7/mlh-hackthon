import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = () => {
    return (
        <div className="container mx-auto md:flex pt-[12vh]">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron