import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-14">
      <div className="max-w-5xl w-full items-end justify-start font-mono lg:flex gap-4">
        <h1 className="text-8xl tracking-wide ">APOD</h1>
        <p className=" text-lg pb-2">Astronomy Picture of the Day</p>
      </div>
      <div className="flex max-w-5xl w-full">
        <div className="w-1/2">
          {" "}
          <Image />
          pic
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold tracking-wider">Title</h1>
          <div className="flex gap-8 pt-1">
            <h3 className=" font-extrabold text-lg">copyright</h3>
            <h3 className=" font-light">date</h3>
          </div>
          <p className="pt-8">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
