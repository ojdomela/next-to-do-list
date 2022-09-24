import React from "react";

interface Props {
    className?: string;
    completed?: boolean;
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
