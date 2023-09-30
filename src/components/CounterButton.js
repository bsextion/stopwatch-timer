import React, { useState } from "react";
import { ReactDOM } from "react";
import  Button  from "react-bootstrap/Button";

export default function CounterButton({children, ...rest}) {

    return (
        <>
        <Button variant="secondary" {...rest}>{children}</Button>{' '}
        </>
    )
}
