import Button from "../layouts/button";
export default function Home() {
  return (
        <>
            <div className="absolute top-0 w-full h-auto bg-gray-400 z-1">
                <div className="mt-[30px] h-100 flex items-center">
                   {/* Container for Lander Text + Buttons */}
                   <div className="flex flex-col w-3/7 ms-30">
                        <h1>Pioneering the Future of Robotics at A&M University</h1>
                        <h4>Leading innovation through advanced research, competitions, and
                        hands-on learning</h4>
                        <div className="flex gap-3">
                            <Button className="mt-3 bg-red-500" content="My Projects"/>
                            <Button className="mt-3 bg-yellow-500" content="My Projects"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}