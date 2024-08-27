import type { ReactNode } from "react";

import { auth } from "@cooper/auth";

import Header from "~/app/_components/header";

/**
 * This should be used when placing content under the header, standardizes how children are placed under a header.
 * @param param0 Children to pass into the layout
 * @returns A layout component that standardizes the distance from the header
 */
export default async function HeaderLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex min-h-screen flex-col">
      <Header session={session} />
      <article className="mt-16 flex w-[100vw] flex-col items-center justify-center gap-16">
        {children}
      </article>
    </div>
  );
}
