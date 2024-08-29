import { notFound, redirect } from "next/navigation";
import { TRPCClientError } from "@trpc/client";

import { auth } from "@cooper/auth";

import { ReviewForm } from "~/app/_components/form/review-form";
import { api } from "~/trpc/server";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (!searchParams?.id) {
    notFound();
  }

  try {
    const role = await api.role.getById({
      id: searchParams.id,
    });

    if (role == null) {
      notFound();
    }

    const company = await api.company.getById({
      id: role.companyId,
    });

    if (company == null) {
      notFound();
    }

    const profile = await api.profile.getCurrentUser();

    if (profile == null) {
      // TODO: Redirect to profile creation page
      return (
        <div className="flex h-screen items-center justify-center">
          <p className="text-xl font-semibold text-red-700">
            You must create a profile first.
          </p>
        </div>
      );
    }

    return (
      <div className="bg-cooper-blue-200 min-h-screen">
        <div className="mx-auto w-full px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h1>HERE</h1>
            <ReviewForm
              company={company}
              roleId={role.id}
              profileId={profile.id}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    if (error instanceof TRPCClientError) {
      // Handle individual errors here
      notFound();
    }
  }
}
