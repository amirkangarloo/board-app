import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};

const Hint = ({
    children,
    label,
    align,
    alignOffset,
    side,
    sideOffset
}: HintProps) => {
    return ( 
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="bg-black/80 border-none text-white"
                    align={align}
                    alignOffset={alignOffset}
                    side={side}
                    sideOffset={sideOffset}
                >
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
     );
}
 
export default Hint;