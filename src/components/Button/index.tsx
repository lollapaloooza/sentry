export interface IButton {
    text: string
    onClick?: () => void
}

export const Button = ({text }: IButton) => {
    return (
        <button onClick={() => {throw new Error("This is your some error!");}}>{text}</button>
    )
}