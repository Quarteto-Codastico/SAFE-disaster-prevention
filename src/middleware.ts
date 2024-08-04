import { NextResponse, type NextRequest } from "next/server";
import { TokenPayload } from "@/types/Auth";
import { jwtDecode } from "jwt-decode";

const adminRoles = ["admin"];
const clientRoles = ["client"];

const authPaths = ["/admin", "/dashboard"];
const guestPaths = ["/sign-in", "/sign-up"];

function convertRoleToPath(role: string) {
  if (adminRoles.includes(role)) return "/admin";
  else if (clientRoles.includes(role)) return "/dashboard";
  return "/";
}

function redirectBasedOnRole(request: NextRequest, role: string) {
  let redirectPath = "/";
  if (clientRoles.includes(role)) {
    redirectPath = "/dashboard";
  } else if (adminRoles.includes(role)) {
    redirectPath = "/admin";
  }
  return NextResponse.redirect(new URL(redirectPath, request.url));
}

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  const isAuthPath = authPaths.some((authPath) =>
    currentPath.startsWith(authPath)
  );

  const isGuestPath = guestPaths.some((guestPath) =>
    currentPath.startsWith(guestPath)
  );

  const tokenCookie = request.cookies.get("token");

  if (!tokenCookie) {
    if (isGuestPath) return NextResponse.next();
    if (isAuthPath)
      return NextResponse.redirect(new URL("/sign-in", request.url));
  } else {
    const tokenDecoded = jwtDecode<TokenPayload>(tokenCookie.value);
    const { role, exp: tokenExp } = tokenDecoded;

    const pathForRole = convertRoleToPath(role);

    if (isGuestPath) {
      return NextResponse.redirect(new URL(pathForRole, request.url));
    }

    if (currentPath === "/") {
      return redirectBasedOnRole(request, role);
    }

    // Check if the token has expired
    if (new Date().getTime() > tokenExp * 1000) {
      const response = NextResponse.redirect(new URL("/sign-in", request.url));
      response.cookies.delete("token");
      return response;
    }

    if (currentPath.startsWith("/admin") && !adminRoles.includes(role)) {
      return NextResponse.redirect(new URL(pathForRole, request.url));
    }
    if (currentPath.startsWith("/dashboard") && !clientRoles.includes(role)) {
      return NextResponse.redirect(new URL(pathForRole, request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/sign-in", "/sign-up", "/"],
};
