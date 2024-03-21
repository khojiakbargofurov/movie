import { NavLink } from "react-router-dom";
import { LayoutGrid, Clapperboard, Tv, Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="flex items-start gap-9 mt-8 ml-8 ">
      <aside className="h-[91vh] p-8 w-24 bg-[#161D2F] rounded-2xl">
        <NavLink to='/'>
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col items-center gap-10">
            <li className="mt-[75px] ">
              <NavLink to='/'>
                <LayoutGrid className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies'>
                <Clapperboard className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <Tv className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <Bookmark className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
            </li>
          </ul>
          <NavLink to='/profile'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>FN</AvatarFallback>
            </Avatar>
          </NavLink>
        </div>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;
