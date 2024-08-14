import { User } from "@/types/types";
import { ChevronRight } from "lucide-react";

import UserImage from "./user-image";
import Link from "next/link";

interface UserItemProps {
   user: User;
}

export default function UserItem({ user }: UserItemProps) {
   return (
      <li className="flex flex-wrap lg:min-w-[45%] gap-4 h-max p-2 shadow-sm">
         <div className="flex gap-x-2 flex-wrap">
            <div className="relative w-32 h-24">
               <UserImage userName={user.name} />
            </div>
            <div>
               <p className="text-lg font-semibold">
                  {user.name}{" "}
                  <span className="text-sm font-normal">
                     (@{user.username})
                  </span>
               </p>
               <p className="text-blue-500 underline">{user.email}</p>
               <p className="mt-2 text-sm">Company : {user.company.name}</p>
            </div>
         </div>
         <div className="space-y-2">
            <p>Phone : {user.phone}</p>
            <p>
               Website :{" "}
               <a
                  href={
                     user.website.startsWith("http")
                        ? user.website
                        : `https://${user.website}`
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 underline"
               >
                  {user.website}
               </a>
            </p>
            <Link
               href={`users/${user.id}`}
               className="flex items-center border-2 border-black/50 rounded-3xl px-2 w-max"
            >
               Details
               <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
         </div>
      </li>
   );
}
