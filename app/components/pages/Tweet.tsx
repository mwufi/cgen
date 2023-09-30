import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function Tweet() {
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-md">Here's your name!!</div>
      </div>
    </div>
  );
}
