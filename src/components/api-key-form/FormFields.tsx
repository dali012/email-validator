import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ApiKeyFormData, FormFieldName } from "@/schemas/api-key-form.schema";

interface FormFieldProps {
  control: Control<ApiKeyFormData>;
  name: FormFieldName;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
}

export const FormFieldComponent = ({
  control,
  name,
  label,
  placeholder,
  isTextarea = false,
}: FormFieldProps) => (
  <div className="space-y-2">
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                placeholder={placeholder}
                className="min-h-[80px]"
                {...field}
                required
              />
            ) : (
              <Input placeholder={placeholder} {...field} required />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);
