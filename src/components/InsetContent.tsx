import React, { ReactNode } from "react";

export function InsetContent(props: { children: ReactNode }) {
    return <div className="p-4 bg-inset lg:border-mumble lg:border-2 lg:rounded-lg text-mumble">{props.children}</div>
}