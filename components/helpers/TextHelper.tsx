import React from "react";

interface Props {
    className?: string;
    completed?: boolean;
    fontSize?: string;
    fontWeight?: string;
    children: React.ReactNode;
}

const TextHelper: React.FC<Props> = ({ className, children}) => {
    return (
        <p className={className}>
            {children}
        </p>
    )
}

export default TextHelper;
