import Image from "next/image";

interface UserImageProps {
   userName: string;
}

export default function UserImage({ userName }: UserImageProps) {
   const getInitials = (name: string) => {
      const nameParts = name.split(" ");
      const initials = nameParts
         .map((part) => part.charAt(0).toUpperCase())
         .join("");
      return initials;
   };

   const initials = getInitials(userName);
   const imageUrl = `https://via.placeholder.com/600x400/0000FF/FFFFFF.png?text=${initials}`;

   return (
      <Image src={imageUrl} fill alt={userName} className="h-full w-full" />
   );
}
