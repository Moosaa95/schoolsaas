import { useState } from "react";
import { Upload } from "lucide-react"; // Import the Upload icon from lucide-react
import { UseFormRegister, FieldError, UseFormSetValue } from "react-hook-form";

interface ImageUploadFieldProps {
  register: UseFormRegister<any>;
  errors: {
    img?: FieldError;
  };
  setValue: UseFormSetValue<any>;
}

export default function ImageUploadField({
  register,
  errors,
  setValue,
}: ImageUploadFieldProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image change event to update the preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);

      // Update the form value for 'img'
      setValue("img", file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <label htmlFor="img" className="mb-1 text-sm font-medium text-gray-700">
        Profile Image
      </label>
      {/* Styled Upload Button */}
      <div className="relative flex flex-col items-center p-6 border border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
        {/* Upload Icon and Text */}
        <Upload className="w-8 h-8 text-gray-500" />
        <span className="mt-1 text-sm text-gray-500">Upload a photo</span>
        {/* Hidden File Input */}
        <input
          type="file"
          id="img"
          className="absolute inset-0 opacity-0 cursor-pointer"
          {...register("img")}
          onChange={handleImageChange}
        />
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="mt-4">
          <img
            src={imagePreview}
            alt="Selected Profile"
            className="object-cover w-32 h-32 border-2 border-gray-300 rounded-full shadow-md"
          />
        </div>
      )}

      {/* Error Message */}
      {errors.img && (
        <span className="mt-2 text-sm text-red-500">{errors.img.message}</span>
      )}
    </div>
  );
}
