import React, { use } from "react";
import Logo from "../elements/Logo";
import Avatar from "../elements/Avatar";
import Options from "./Options";
import MaxLimitWrapper from "../elements/MaxLimitWrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

async function Header() {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getRoles,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  const user = await getUser();
  return (
    <MaxLimitWrapper>
      <header className="px-2 md:px-0 ">
        <div className="header-top flex justify-between min-h-[80px] items-center">
          <Link href={"/"}>
            <div className="logo">
              <Logo />
            </div>
          </Link>
          <div className="avatar flex items-center space-x-2">
            <span className="md:flex items-center hidden">
              <svg viewBox="0 0 24 24" className="w-[16px] mr-1">
                <path d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9H1z"></path>
              </svg>
              EUR
            </span>

            {isLogged &&
            user?.picture &&
            user?.given_name &&
            user.family_name ? (
              <Avatar
                src={user?.picture}
                alt={user?.given_name}
                fallBack={
                  user?.given_name[0].toUpperCase() +
                  user?.family_name[0].toUpperCase()
                }
              />
            ) : (
              <Button className="text-black bg-[#34e0a1]">
                <LoginLink>Login</LoginLink>
              </Button>
            )}
          </div>
        </div>
      </header>
    </MaxLimitWrapper>
  );
}

export default Header;
