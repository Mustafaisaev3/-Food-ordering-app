import {HomeIcon, ClockIcon, MailIcon, UserCircleIcon, BellIcon, LockClosedIcon } from '@heroicons/react/outline'
import { useState } from 'react';


type AlertProps = {
  message: string;
  variant?:
    | 'info'
    | 'warning'
    | 'error'
    | 'success'
    | 'infoOutline'
    | 'warningOutline'
    | 'errorOutline'
    | 'successOutline';
  closeable?: boolean;
  onClose?: () => void;
  className?: string;
};

const variantClasses = {
  info: 'bg-blue-100 text-blue-600',
  warning: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-500',
  success: 'bg-green-100 text-accent',
  infoOutline: 'border border-blue-200 text-blue-600',
  warningOutline: 'border border-yellow-200 text-yellow-600',
  errorOutline: 'border border-red-200 text-red-600',
  successOutline: 'border border-green-200 text-green-600',
};

const Alert: React.FC<AlertProps> = ({
  message,
  closeable = false,
  variant = 'info',
  className,
  onClose,
}) => {

    const [isActive, setIsActive] = useState(true)

  return (
    <div
      className={`flex items-center justify-between relative rounded py-4 px-5 shadow-sm ${variantClasses[variant]} absolute top-0 left-0`}
      role="alert"
    >
      <p className="text-sm">{message}</p>
      {isActive && (
        <button
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => setIsActive(false)}
          title="Close alert"
          className="-me-0.5 -mt-3 flex items-center justify-center rounded-full flex-shrink-0 w-6 h-6 text-red-500 absolute end-2 top-1/2 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-25 focus:outline-none focus:bg-gray-300 focus:bg-opacity-25"
        >
          <span aria-hidden="true">
            <LockClosedIcon className="w-3 h-3" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Alert;
