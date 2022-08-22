import { FC } from "react";
import logo from '../../logo.svg';

interface IProps { }

const PinkHome: FC<IProps> = ({ }): JSX.Element => {
    return (
        <header className="App-header--pink">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
};

export default PinkHome