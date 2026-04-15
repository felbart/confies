import { RouterProvider } from "react-router";
import { router } from "@/app/router";
import { LenisProvider } from "@/providers/LenisProvider";

export default function Root() {
  return (
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  );
}