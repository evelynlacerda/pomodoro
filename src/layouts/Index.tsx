import Buttons from "../components/Buttons";
import Definitions from "../components/Definitions";
import Stopwatch from "../components/Stopwatch";

const Index = () => {
    return (
        <main>
            <div>
                <Definitions />
                <Buttons />
            </div>
            <Stopwatch />
        </main>
    );
}

export default Index;