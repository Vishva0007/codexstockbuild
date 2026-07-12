import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const registerSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Use at least 8 characters"),
});
type RegisterValues = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({ resolver: zodResolver(registerSchema) });
  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="text-2xl font-semibold">Create your workspace</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Account creation is a UI-only placeholder while authentication is selected.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(() => undefined)}>
        <label className="block text-sm font-medium">
          Name
          <input
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-red-500">{errors.email.message}</span>
          )}
        </label>
        <label className="block text-sm font-medium">
          Password
          <input
            className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="mt-1 block text-xs text-red-500">{errors.password.message}</span>
          )}
        </label>
        <Button className="w-full" type="submit">
          Create account (coming soon)
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link className="text-primary hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </Card>
  );
}
