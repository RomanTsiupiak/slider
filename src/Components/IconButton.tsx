import React from 'react';
import clsx from 'clsx';

type IconButtonProps = {
  icon: React.ReactElement;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const IconButton = ({ icon, onClick, className = '', disabled = false }: IconButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={clsx('p-3 hover:bg-[#C8CCDD]', className, disabled && 'text-gray-400')}
  >
    {icon}
  </button>
);
