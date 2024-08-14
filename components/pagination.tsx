import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "./ui/button";

interface PaginationProps {
   handleNextPage: () => void;
   handlePreviousPage: () => void;
   currentPage: number;
}

export default function Pagination({
   handleNextPage,
   handlePreviousPage,
   currentPage,
}: PaginationProps) {
   return (
      <div className="flex items-center justify-center gap-2">
         <Button variant={"outline"} size={"icon"} onClick={handlePreviousPage}>
            <ChevronLeft className="w-4 h-4" />
         </Button>
         <div className="p-4">{currentPage}</div>
         <Button variant={"outline"} size={"icon"} onClick={handleNextPage}>
            <ChevronRight className="w-4 h-4" />
         </Button>
      </div>
   );
}
