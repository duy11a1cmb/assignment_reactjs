import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import React from "react";

interface showToast {
    status: string,
    message: string,
    show: boolean,
    setShow: any,
    bg:string
}

const ShowToast = (props: showToast) => {
    return (
        <ToastContainer position="top-end" className="p-3" style={{zIndex: 1}}>
            <Toast onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide bg={props.bg}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{props.status}</strong>

                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ShowToast;