import { Loader } from "lucide-react";

export default function LoadingWheel() {
   return (
      <div className="w-full flex items-center justify-center p-8">
         <Loader className="w-10 h-10 animate-spin" />{" "}
      </div>
   );
}
