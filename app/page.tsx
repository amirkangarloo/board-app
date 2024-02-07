import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <h1>Hello Board!</h1>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
