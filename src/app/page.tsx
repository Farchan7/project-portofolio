import Image from "next/image";
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  SendIcon,
  TwitterIcon,
} from "./icons/icons";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="max-w-[1800px] mx-auto">
        <nav className="mt-20">
          <ul className="flex items-center justify-evenly gap-5">
            <li className="">
              <a href="#home">HOME</a>
            </li>
            <li className="">
              <a href="#project">Project</a>
            </li>
            <li className="">
              <a href="#skill">Skill</a>
            </li>
            <button className="p-5 border-2 rounded-2xl active:translate-x-2 active:translate-y-2 hover:translate-x-1 hover:translate-y-1">
              <a href="#resume.pdf" target="_blank">
                Resume
              </a>
            </button>
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-5 mt-20">
          <div className="mt-40">
            <div className="p-2">
              <div className="p-2 flex gap-5">
                <div className="w-[70px] h-20">
                  <img src="/images/fotoff.jpeg" />
                </div>
                <div className="">
                  <h4 className="font-bold text-2xl">HII GUYSSS!!!!!!!</h4>
                  <p className="mt-2 text-xl font-semibold">
                    Nama saya Fuad Farchan
                  </p>
                  <p className="text-xl font-semibold">
                    Saya adalah seorang{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                      FontEnd Developer Pemula
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className="p-2 border-2 rounded-xl pencet">
                Contact ME
              </button>
            </div>
          </div>
          <div className="">
            <img className="" src="/images/sapiens.svg" />
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="max-w-[1800px] mx-auto bg-slate-100">
        <div className="">
          <h3 className="p-3 text-xl">--MY WORKS</h3>
        </div>
        <div className="px-3">
          <h1 className="text-3xl font-plusjak font-semibold ">PROJECT ME</h1>
        </div>
        {/* Project 1 */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="p-5 border-4 rounded-xl border-black">
            <img className="mt-2" src="/images/project 1.jpeg" />
            <div className="grid grid-rows-2 mt-5">
              <div className="flex gap-72">
                <h3 className="text-xl font-bold ">E-commerce Website</h3>
                <a href="/">
                  <SendIcon />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-5">
                <div className="p-2 border-2 rounded-xl">HTML</div>
                <div className="p-2 border-2 rounded-xl">CSS</div>
              </div>
            </div>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquid provident molestiae quas esse perferendis
              doloremque quibusdam magni architecto magnam.
            </p>
          </div>
          {/* Project 2 */}
          <div className="p-5 border-4 rounded-xl border-black">
            <img className="mt-2" src="/images/project 2.jpeg" />
            <div className="grid grid-rows-2 mt-5">
              <div className="flex gap-[370px]">
                <h3 className="text-xl font-bold ">Landing Page</h3>
                <a href="/">
                  <SendIcon />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-5">
                <div className="p-2 border-2 rounded-xl">React</div>
                <div className="p-2 border-2 rounded-xl">Tailwind</div>
              </div>
            </div>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquid provident molestiae quas esse perferendis
              doloremque quibusdam magni architecto magnam.
            </p>
          </div>
          {/* Project 3 */}
          <div className="p-5 border-4 rounded-xl border-black">
            <img className="mt-2" src="/images/project 3.jpeg" />
            <div className="grid grid-rows-2 mt-5">
              <div className="flex gap-80">
                <h3 className="text-xl font-bold ">Portofolio Website</h3>
                <a href="/">
                  <SendIcon />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-5">
                <div className="p-2 border-2 rounded-xl">React</div>
                <div className="p-2 border-2 rounded-xl">Tailwind</div>
              </div>
            </div>
            <p className="mt-2 font-plusjak">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquid provident molestiae quas esse perferendis
              doloremque quibusdam magni architecto magnam.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1800px] mx-auto h-screen mt-10">
        <div className="p-3">
          <h4 className="text-xl font-plusjak font-normal">Learning Path</h4>
          <p className="text-2xl font-plusjak font-semibold">
            Skill & Education
          </p>
        </div>
      </section>
      <section className="max-w-[1800px] mx-auto h-screen">
        <div className="">Contact ME</div>
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <form className="grid grid-rows-1 gap-5">
              <div className="">
                <label></label>
                <input
                  className="ml-2 pb-5 pr-[300px] border-2 border-slate-900"
                  type="text"
                  name="Name"
                  placeholder="Name..."
                />
              </div>
              <div className="">
                <label></label>
                <input
                  className="ml-2 pb-5 pr-[300px] border-2 border-slate-900 "
                  type="text"
                  name="Name"
                  placeholder="Name..."
                />
              </div>
              <div className="">
                <label></label>
                <textarea
                  className="ml-2 pb-[300px] pr-[320px] border-2 border-slate-900 "
                  name="biografi"
                  placeholder="Name..."
                ></textarea>
              </div>
              <a href="/buttons/6" className="ml-2 send">
                Button
              </a>
            </form>
          </div>
          <div className="">
            <p className="">Check Out my:</p>
            <div className="mt-5 main">
              <div className="up">
                <button className="card1">
                  <GitHubIcon />
                </button>
                <button className="card2">
                  <DiscordIcon />
                </button>
                <button className="card3 mt-[100px] ml-[-195px]">
                  <TwitterIcon />
                </button>
                <button className="card4 mt-[100px] ml-[2px]">
                  <TwitterIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
