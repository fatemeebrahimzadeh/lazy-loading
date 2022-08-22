import { FC, lazy, startTransition, Suspense, useEffect, useState } from "react";
import logo from '../../logo.svg';
import Spinner from "../../components/UI/spinner/Spinner";
const BlueHome = lazy(() => import("../../components/Home/BlueHome"));
const PinkHome = lazy(() => import("../../components/Home/PinkHome"));

interface IProps { }

const Home: FC<IProps> = ({ }): JSX.Element => {

    const [color, setColor] = useState<"pink" | "blue">("blue")

    const handleColor = () => {
        startTransition(() => {
            if (color === "pink") setColor("blue")
            else setColor("pink")
        });
    }

    if (color === "blue") {
        return (
            <Suspense fallback={<Spinner isLoading={true} />}>
                <BlueHome />
                <button onClick={handleColor}>handleColor</button>
            </Suspense>
        );
    } else if (color === "pink") {
        return (
            <Suspense fallback={<Spinner isLoading={true} />}>
                <PinkHome />
                <button onClick={handleColor}>handleColor</button>
            </Suspense>
        );
    } else {
        return <div> Invalid User </div>;
    }
};

export default Home