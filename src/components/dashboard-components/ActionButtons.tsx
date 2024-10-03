import { LucideProps } from "lucide-react";

interface ActionButtonProps {
  icon?: React.ComponentType<LucideProps>;  // Optional icon component
  text?: string;                            // Optional text to be displayed
  ariaLabel?: string;
  tooltip?: string;
  className?: string;
  onClick?: () => void;
}

const ActionButton = ({ icon: Icon, text, ariaLabel, tooltip, className, onClick }: ActionButtonProps) => (
  <button
    aria-label={ariaLabel}
    className={`relative flex items-center justify-center px-4 h-10 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 rounded-full group hover:bg-gray-300 ${className}`}
    onClick={onClick}
  >
    {/* Conditionally Render Icon */}
    {Icon && <Icon size={20} className={`${text ? 'mr-2' : ''}`} />} {/* Adjust margin if text is present */}

    {/* Render Text if Provided */}
    {text && <span>{text}</span>}

    {/* Tooltip */}
    <span className="absolute hidden px-2 py-1 mb-1 text-xs text-white bg-gray-700 rounded-md bottom-10 group-hover:block">
      {tooltip}
    </span>
  </button>
);

export default ActionButton;
