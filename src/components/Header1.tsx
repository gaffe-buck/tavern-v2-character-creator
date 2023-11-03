import React, { ReactNode } from "react";

export function Header1(props: { children: ReactNode }) {
    return <h1 className="text-5xl font-bold text-header mb-8">{props.children}</h1>
}