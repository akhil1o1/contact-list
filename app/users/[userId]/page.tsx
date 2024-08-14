import { User } from "@/types/types";
import { Separator } from "@/components/ui/separator";
import UserImage from "@/components/user-image";
import DetailsForm from "@/components/details-form";
import UserPosts from "@/components/user-posts";

export default async function UserDetailsPage({
   params,
}: {
   params: { userId: string };
}) {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
   );

   const user = (await response.json()) as User;

   console.log("user", user);

   return (
      <div>
         <h2 className="text-xl font-semibold">
            User details for @{user.username}
         </h2>
         <Separator />
         <div className="flex flex-wrap gap-8 py-8">
            <div className="relative w-40 h-36">
               <UserImage userName={user.name} />
            </div>
            <div className="min-w-[30%]">
               <DetailsForm user={user} />
            </div>
            <div className="flex-1 min-w-[30%]">
               <UserPosts userId={user.id} />
            </div>
         </div>
      </div>
   );
}
