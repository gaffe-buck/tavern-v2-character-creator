import React, { ReactNode } from "react";

export function MainContent(props: { children: ReactNode }) {
    return <div className="m-auto max-w-screen-lg lg:px-8 py-8">{props.children}</div>
}