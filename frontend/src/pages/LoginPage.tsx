import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});
type LoginValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });
  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Authentication is being prepared for a future provider integration.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(() => undefined)}>
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
          Sign in (coming soon)
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        New here?{" "}
        <Link className="text-primary hover:underline" to="/register">
          Create an account
        </Link>
      </p>
    </Card>
  );
}
