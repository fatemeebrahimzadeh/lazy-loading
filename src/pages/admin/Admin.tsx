import { FC } from "react"

interface IProps { }

const Admin: FC<IProps> = ({ }): JSX.Element => {
    return (
        <header className="wrapper">
            <p>
                Hello Admin
            </p>
        </header>
    )
}

export default Admin