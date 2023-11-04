import React from "react";

export function Invalid() {
    return <div className="flex flex-row items-center justify-end p-2 absolute w-full">
        <p className="text-mayday text-xs">Not valid!</p>
    </div>
}