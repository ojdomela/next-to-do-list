import React from "react";

interface Props {
    className?: string;
    minHeight?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    children: React.ReactNode;
}

const WrapperHelper: React.FC<Props> = ({ className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default WrapperHelper;
