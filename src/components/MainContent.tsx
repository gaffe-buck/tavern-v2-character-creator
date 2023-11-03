import React, { ReactNode } from "react";

export function MainContent(props: { children: ReactNode }) {
    return <div className="m-auto max-w-screen-xl p-8">{props.children}</div>
}