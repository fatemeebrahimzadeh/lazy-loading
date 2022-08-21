import { FC } from "react"

interface IProps { }

const Customer: FC<IProps> = ({ }): JSX.Element => {
    return (
        <header className="App-header">
            <p>
                Hello costomer
            </p>
        </header>
    )
}

export default Customer