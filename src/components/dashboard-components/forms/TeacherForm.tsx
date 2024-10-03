import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "../ActionButtons";
import InputField from "../InputField";
import { useState } from "react";
import { UploadIcon } from "lucide-react";
import ImageUploadField from "../ImageUpload";

// Define schema using Zod
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username can be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodGroup: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z
    .string()
    .min(1, { message: "Birthday is required" }), // Use string for React Hook Form compatibility
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z
    .instanceof(File, { message: "Image is required" })
    .optional(), // Optional in case of update scenarios
});

// Type definition for the form data
type TeacherFormData = z.infer<typeof schema>;

interface TeacherFormProps {
  type: "create" | "update";
  data?: Partial<TeacherFormData>;
}

export default function TeacherForm({ type, data }: TeacherFormProps) {
const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<TeacherFormData>({
    resolver: zodResolver(schema),
    defaultValues: data || {}, // Set default values from `data` prop
  });

  // Form submit handler
  const onSubmit = handleSubmit((formData) => {
    console.log("Form Data:", formData);
    // Handle form submission logic (e.g., create or update teacher)
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="flex flex-col h-[800px] gap-6 p-4  bg-white rounded-md" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a New Teacher" : "Update Teacher Information"}
      </h1>

      {/* Authentication Information Section */}
      <span className="text-xs font-medium text-gray-400">Authentication Information</span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
            label="Username"
            name="username"
            register={register}
            error={errors.username}
            defaultValue={data?.username}
            inputProps={{ placeholder: "Enter a unique username" }}
        />
        <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            defaultValue={data?.email}
            inputProps={{ placeholder: "Enter teacher's email address" }}
        />
        <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
            defaultValue={data?.password}
            inputProps={{ placeholder: "Create a secure password" }}
        />
      </div>

      {/* Personal Information Section */}
      <span className="text-xs font-medium text-gray-400">Personal Information</span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
            label="First Name"
            name="firstName"
            register={register}
            defaultValue={data?.firstName}
            error={errors.firstName}
            inputProps={{ placeholder: "Enter first name" }}
        />
        <InputField
            label="Last Name"
            name="lastName"
            register={register}
            defaultValue={data?.lastName}
            error={errors.lastName}
            inputProps={{ placeholder: "Enter last name" }}
        />
        <InputField
            label="Phone"
            name="phone"
            type="tel"
            register={register}
            error={errors.phone}
            defaultValue={data?.phone}
            inputProps={{ placeholder: "Enter phone number" }}
        />
        <InputField
            label="Address"
            name="address"
            register={register}
            error={errors.address}
            defaultValue={data?.address}
            inputProps={{ placeholder: "Enter home address" }}
        />
        <InputField
            label="Blood Type"
            name="bloodType"
            register={register}
            error={errors.bloodGroup}
            defaultValue={data?.bloodGroup}
            inputProps={{ placeholder: "Enter home address" }}
        />

        {/* Birthday Input */}
        <InputField
            label="Birthday"
            name="birthday"
            type="date"
            register={register}
            defaultValue={data?.birthday}
            error={errors.birthday}
        />
      </div>

      {/* Sex Select Field */}
      <div className="flex flex-col">
        <label htmlFor="sex" className="text-sm font-medium text-gray-700">Sex</label>
        <select
          id="sex"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("sex")}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.sex && <span className="text-sm text-red">{errors.sex.message}</span>}
      </div>

      {/* Image Upload */}
      <ImageUploadField register={register} errors={errors} setValue={setValue} />

      {/* Action Button */}
      <ActionButton
        text={type === "create" ? "Create Teacher" : "Update Teacher"}
        className="p-2 text-white rounded-md bg-blue hover:bg-blue-700"
        ariaLabel={type === "create" ? "Create Teacher" : "Update Teacher"}
      />
    </form>
  );
}
