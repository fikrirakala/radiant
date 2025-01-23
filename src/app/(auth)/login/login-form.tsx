import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
      <form className="p-7 sm:p-11">
        <div className="flex items-start">
          <Link href="/">
            <Icons.radiant className="h-9 fill-black" />
          </Link>
        </div>
        <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
        <p className="mt-1 text-sm/5 text-gray-600">
          Sign in to your account to continue.
        </p>
        <div className="mt-8 space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
        </div>
        <div className="mt-8 space-y-3">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
        </div>
        <div className="mt-8 flex items-center justify-between text-sm/5">
          <div className="flex items-center gap-3">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Link href="" className="font-medium hover:text-gray-600">
            Forgot password
          </Link>
        </div>
        <div className="mt-8">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </form>
      <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
        Not a member?{" "}
        <Link className="font-medium hover:text-gray-600" href="/">
          Create an account
        </Link>
      </div>
    </div>
  );
}
