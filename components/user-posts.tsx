import { Post } from "@/types/types";

interface UserPostsProps {
   userId: number;
}

export default async function UserPosts({ userId }: UserPostsProps) {
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
   );
   const posts = (await response.json()) as Post[];

   console.log(posts);

   return (
      <div>
         <h3 className="font-semibold text-lg">User posts</h3>
         <div className="flex flex-col gap-2 max-h-96 overflow-y-auto mt-2">
            {posts.map((post) => (
               <div key={post.id} className="p-1 shadow-sm">
                  <p className="text-sm">{post.title}</p>
                  <p className="text-xs">{post.body}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
