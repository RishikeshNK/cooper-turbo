import { signIn } from "@cooper/auth";
import { Button } from "@cooper/ui/button";

export default function LoginButton() {
  return (
    <form>
      <Button
        className="border-cooper-blue-400 bg-cooper-blue-400 hover:border-cooper-blue-200 hover:bg-cooper-blue-200 hover:text-cooper-blue-600 rounded-xl px-5 py-2.5 text-sm text-white focus:outline-none focus:ring-4 focus:ring-white"
        formAction={async () => {
          "use server";
          await signIn("google");
        }}
      >
        Sign In
      </Button>
    </form>
  );
}
