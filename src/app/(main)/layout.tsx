import { type ReactNode } from "react";
import { redirect } from "next/navigation";
 
import Header from "./header";
import { Footer } from "./footer";
import { validateRequest } from "@/lib/auth/validate-request";
import { redirects } from "@/lib/constants";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { user } = await validateRequest();

  if (!user) redirect(redirects.toLogin);
  if (user.emailVerified === false) redirect(redirects.toVerify);

  return (
    <>
      <Header user={user} />
      {children}
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default MainLayout;
