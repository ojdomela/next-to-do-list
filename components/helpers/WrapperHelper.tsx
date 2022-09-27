import React, { ForwardedRef } from "react";

interface Props {
    className?: string;
    ref?: ForwardedRef<HTMLDivElement>;
    children: React.ReactNode;
}

const WrapperHelper: React.FC<Props> = React.forwardRef(({ className, children }, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
})

export default WrapperHelper;
