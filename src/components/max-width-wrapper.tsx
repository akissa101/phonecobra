import { cn } from '@/lib/utils';
import React from 'react';

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        'h-full w-full max-w-screen mx-auto px-2.5 md:px-20 ',
        className
      )}
    >
      {children}
    </div>
  );
};
