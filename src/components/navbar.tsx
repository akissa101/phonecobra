import React from 'react';
import { MaxWidthWrapper } from './max-width-wrapper';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './theme-toggle';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type NavbarProps = {};

export const Navbar = async ({}: NavbarProps) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL!;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-ful  border-b border-slate-200 bg-slate-2000/75 dark:border-slate-700 dark:bg-slate-950/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-slate-700">
          <Link href="/" className="flex z-40 font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={cn(
                    'hover:bg-slate-800',
                    buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })
                  )}
                >
                  Sign up
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-700 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
