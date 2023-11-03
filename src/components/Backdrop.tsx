import React, { ReactNode } from "react";

export function Backdrop(props: { children: ReactNode }) {
    return <div className="bg-darkest min-h-screen">{props.children}</div>
}