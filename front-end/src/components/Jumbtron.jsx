import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = () => {
    return (
        <div className="container mx-auto mb-[10vh] pt-[26vh] h-[80vh] md:flex">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron