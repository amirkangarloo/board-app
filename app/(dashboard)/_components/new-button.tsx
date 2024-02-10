"use client";

import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "../../../components/hint";

const NewButton = () => {
    return ( 
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint
                        label="Add new"
                        align="center"
                        side="right"
                        sideOffset={15}
                    >
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0  border-none bg-transparent justify-items-end max-w[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
     );
}
 
export default NewButton;