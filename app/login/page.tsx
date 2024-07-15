import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/app/login/form";

export default async function LoginPage() {
  const session = await getServerSession();
  console.log({ session });

  if (session) {
    redirect("/");
  }

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
