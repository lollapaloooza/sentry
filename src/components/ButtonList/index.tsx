import {Button, IButton} from "../Button";

export interface IButtonList {
    buttons: IButton[];
}

export const ButtonList = ({buttons}: IButtonList) => {
    return (
        buttons.map((button, index) => (
            <Button key={index} text={button.text} onClick={button.onClick} />
        ))
    )
}