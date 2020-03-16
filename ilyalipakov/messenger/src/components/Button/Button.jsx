import React from "react";
import ButtonUI from "@material-ui/core/Button";

const Button = ({handleSendMessage}) => {

    return (
        <>
            <ButtonUI variant="contained" size="small" color="primary" onClick={handleSendMessage()}>Отправить</ButtonUI>
        </>
    );
};

export default Button;