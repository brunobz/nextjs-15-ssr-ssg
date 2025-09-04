import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
