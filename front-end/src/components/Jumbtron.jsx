import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = () => {
    return (
        <div className="md:flex ">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron