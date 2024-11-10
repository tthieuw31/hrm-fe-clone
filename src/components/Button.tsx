import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  bgColor?: string;
  borderRadius?: '2.5xl' | 'md';
  size?: 'sm' | 'md';
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  border?: string;
  customClass?: string;
}

export default function Button(props: IProps): JSX.Element {
  const {
    children,
    bgColor = 'bg-primary-50',
    borderRadius = 'lg',
    size = 'sm',
    type = 'button',
    onClick,
    disabled = false,
    color = 'text-white',
    border = 'boder-primary-50',
    customClass = '',
  } = props;

  const padding = size === 'sm' ? 'py-3 px-6' : 'py-4 px-20';
  const opacity = disabled ? '20' : '100';

  return (
    <button
      type={type}
      className={`flex gap-3 ${bgColor} opacity-${opacity} rounded-${borderRadius} ${color} para-bold-1 ${padding} drop-shadow-button border border-solid ${border} ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
