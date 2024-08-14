import { User } from "@/types/types";
import UserItem from "./user-item";

import LoadingWheel from "./loader";

interface UserListProps {
   users: User[];
   searchQuery : string;
}

export default function UserList({ users, searchQuery }: UserListProps) {
   // console.log(users);

   if(!users.length && !searchQuery) {
      return <LoadingWheel/>
   }else if (!users.length && searchQuery) {
      return <p className="text-center">No results found</p>
   }

   return (
      <ul className="flex flex-wrap gap-4 min-h-[40vh]">
         {users.map((user) => (
            <UserItem key={user.id} user={user} />
         ))}
      </ul>
   );
}
