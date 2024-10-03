import { Edit3Icon, PlusIcon, Trash2Icon, XCircleIcon } from "lucide-react";
import ActionButton from "./ActionButtons";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm"; // Import your different forms as needed
// import StudentForm from "./forms/StudentForm"; // Example form component

interface FormModalProps {
  id?: number;
  type: "create" | "update" | "delete";
  data?: any;
  table:
    | "teacher"
    | "student"
    | "parent"
    | "class"
    | "subject"
    | "result"
    | "lesson"
    | "assignment"
    | "event"
    | "attendance"
    | "announcement"
    | "exam";
}

export default function FormModal({ table, type, data, id }: FormModalProps) {
  const bgColor = type === "create" ? "bg-yellow500" : type === "update" ? "bg-sky" : "bg-redDark";
  const IconComponent = type === "create" ? PlusIcon : type === "update" ? Edit3Icon : Trash2Icon;

  const [open, setOpen] = useState<boolean>(false);

  const getFormComponent = () => {
    if (type === "delete") return null; // Skip if type is "delete"

    switch (table) {
      case "teacher":
        return <TeacherForm type={type} data={data} />; // Ensure `type` is either "create" or "update"
    //   case "student":
    //     return <StudentForm type={type} data={data} />;
      default:
        return <span className="text-center">No form available for this type</span>;
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <ActionButton
        icon={IconComponent}
        tooltip={type === "create" ? `Create ${table}` : type === "update" ? `Update ${table}` : `Delete ${table}`}
        className={`${bgColor} text-white rounded-md`}
        ariaLabel={`${type} ${table}`}
        onClick={() => setOpen(true)}
      />

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-[90%] p-6 bg-white rounded-md md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            {/* Modal Content */}
            {type === "delete" ? (
              <form action="" className="flex flex-col gap-4 p-4">
                <span className="font-medium text-center">
                  All data will be lost. Are you sure you want to delete this {table}?
                </span>
                <ActionButton
                  icon={Trash2Icon}
                  className="self-center w-1/2 text-white bg-red hover:bg-redDark"
                  tooltip="Delete"
                  ariaLabel={`Delete ${table}`}
                  onClick={() => console.log(`Deleting ${table} with ID ${id}`)}
                />
              </form>
            ) : (
              getFormComponent()
            )}

            {/* Close Button */}
            <div className="absolute cursor-pointer top-4 right-4">
              <XCircleIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" onClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
