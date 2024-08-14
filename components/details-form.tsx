"use client";

import { FormEvent, useRef, useState } from "react";
import { User } from "@/types/types";

import { toast } from "sonner";
import { Button } from "./ui/button";
import InputField from "@/components/input-field";

interface DetailsFormProps {
   user: User;
}

export default function DetailsForm({ user }: DetailsFormProps) {
   const [loading, setLoading] = useState(false);

   const nameRef = useRef<HTMLInputElement>(null);
   const companyRef = useRef<HTMLInputElement>(null);
   const emailRef = useRef<HTMLInputElement>(null);
   const industryRef = useRef<HTMLInputElement>(null);
   const usernameRef = useRef<HTMLInputElement>(null);
   const catchphraseRef = useRef<HTMLInputElement>(null);

   const onSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const updatedUser = {
         name: nameRef.current?.value || user.name,
         username: usernameRef.current?.value || user.username,
         email: emailRef.current?.value || user.email,
         company: {
            name: companyRef.current?.value || user.company.name,
            bs: industryRef.current?.value || user.company.bs,
            catchPhrase:
               catchphraseRef.current?.value || user.company.catchPhrase,
         },
      };

      try {
         const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${user.id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(updatedUser),
            }
         );

         if (!response.ok) {
            throw new Error("Failed to update user details.");
         }

         const result = await response.json();
         console.log(result);
         toast.success("Updated Successfully!");
      } catch (err) {
         console.error(err);
         toast.error("Failed to update!");
      } finally {
         setLoading(false);
      }
   };

   return (
      <form className="grid grid-cols-2 gap-y-4 gap-x-10 w-full" onSubmit={onSubmit}>
         <InputField
            label="Name"
            defaultValue={user.name}
            name="name"
            id="name"
            ref={nameRef}
         />
         <InputField
            label="Company"
            defaultValue={user.company.name}
            name="company"
            id="company"
            ref={companyRef}
         />
         <InputField
            label="Email"
            defaultValue={user.email}
            name="email"
            id="email"
            ref={emailRef}
         />
         <InputField
            label="Industry"
            defaultValue={user.company.bs}
            name="industry"
            id="industry"
            ref={industryRef}
         />
         <InputField
            label="Username"
            defaultValue={user.username}
            name="username"
            id="username"
            ref={usernameRef}
         />
         <InputField
            label="Catchphrase"
            defaultValue={user.company.catchPhrase}
            name="catchphrase"
            id="catchphrase"
            ref={catchphraseRef}
         />
         <div className="col-span-2 flex items-center justify-between">
            <Button type="submit" disabled={loading}>
               {loading ? "Updating..." : "Update"}
            </Button>
         </div>
      </form>
   );
}
