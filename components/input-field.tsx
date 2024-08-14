import { forwardRef, InputHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
   ({ label, ...props }, ref) => {
      return (
         <div className="space-y-2">
            <Label htmlFor={props.id}>{label}</Label>
            <Input ref={ref} {...props} />
         </div>
      );
   }
);

InputField.displayName = "InputField";

export default InputField;
