import React, { ReactNode } from "react";

export function InsetContent(props: { children: ReactNode }) {
    return <div className="p-4 bg-inset border-mumble border-2 rounded-lg text-mumble">{props.children}</div>
}