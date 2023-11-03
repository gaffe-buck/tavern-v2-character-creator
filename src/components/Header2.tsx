import React, { ReactNode } from "react";

export function Header2(props: { children: ReactNode }) {
    return <h2 className="text-3xl font-bold text-header mb-4">{props.children}</h2>
}