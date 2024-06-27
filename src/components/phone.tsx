import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export const Phone = ({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt="phone image"
        width={200}
        height={200}
        className="z-50 pointer-events-none select-none rounded-[2rem] object-cover"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          alt="your image"
          width={200}
          height={200}
          className="object-cover rounded-[2rem] "
        />
      </div>
    </div>
  );
};
