import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";

const Skills = ["React.js", 'Express', 'Tailwind Css'];
const Profile = () => {

  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPvQQPFMNni6XDAO59w_J8CJsYxMBD0F0Pw&s"
                alt="photo"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, accusantium.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>udgeetbhatt271@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8707230250</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
         <div className="flex items-center gap-1">
         {
           Skills.length !== 0 ?  Skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
          }
         </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className='text-md font-bold'>Resume</Label>
          {
            isResume ? <a target="blank" href="https://youtube.com" className="text-blue-500 w-full hover:underline cursor-pointer">Udgeet Bhatt</a> :
            <span>NA</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          {/* Application Table */}
          <AppliedJobsTable/>
        </div>
    </div>
  );
};

export default Profile;
