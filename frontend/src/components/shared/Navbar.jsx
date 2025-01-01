import { Link, LogOut, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Tech<span className="text-blue-600">Hiv</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
            {/* <li><Link>Home</Link></li>
        <li><Link>Jobs</Link></li>
        <li><Link>Home</Link></li> */}
          </ul>
              {
                !user ? (
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Login</Button>
                    <Button className='bg-[#2f75f7] hover:bg-[#1920dc] '>Signup</Button>
                  </div>
                ):(
                  <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Udgeet Bhatt</h4>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-400">
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2/>
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut/> 
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                )
              }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
