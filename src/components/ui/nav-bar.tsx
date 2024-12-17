import { ToogleThemeButton } from "./theme-button";
import { UserNav } from "./user-nav";

export default function NavBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container m-auto">
        <div className="ml-auto flex items-center space-x-4 ">
          <ToogleThemeButton />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
