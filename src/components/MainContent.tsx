import React, { ReactNode } from "react";

export function MainContent(props: { children: ReactNode }) {
    return <div className="m-auto max-w-screen-lg p-8">{props.children}</div>
}