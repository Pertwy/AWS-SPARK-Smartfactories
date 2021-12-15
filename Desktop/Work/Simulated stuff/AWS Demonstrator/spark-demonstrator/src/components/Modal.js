import React from 'react'
import "./modal.css"

export default function Modal({children, modal}) {
    return (
        <>
            {modal && (
                <div className={modal ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                        {children}
                    </section>
                </div>
            )}
        </>
    )
}
