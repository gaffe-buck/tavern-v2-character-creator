import React, { ReactNode } from "react";

export function Header3(props: { children: ReactNode }) {
    return <h3 className="text-2xl font-bold text-header mb-4">{props.children}</h3>
}