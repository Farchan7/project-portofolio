import Image from "next/image";
import {
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LocIcon,
  PhoneIcon,
  SendIcon,
  TwitterIcon,
} from "./icons/icons";

export default function Home() {
  return (
    <div>
      <nav className="mt-20 max-w-5xl mx-auto">
        <ul className="flex items-center justify-between ">
          <li className="">
            <a href="#home">HOME</a>
          </li>
          <li className="">
            <a href="#project">Project</a>
          </li>
          <li className="">
            <a href="#skill">Skill</a>
          </li>
          <button className="p-5 border-2 rounded-2xl active:translate-x-2 active:translate-y-2 hover:translate-x-1 hover:translate-y-1 transition">
            <a href="#resume.pdf" target="_blank">
              Resume
            </a>
          </button>
        </ul>
      </nav>

      {/* Section 1 */}
      <section className="pb-40">
        <div className="max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-2 grid grid-cols-1 gap-5 mt-20">
          <div className="mt-40">
            <div className="p-2">
              <div className="p-2 md:p-4 flex flex-col md:flex-row gap-5">
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
              <a href="#contact-me" className="p-2 border-2 rounded-xl pencet">
                Contact ME
              </a>
            </div>
          </div>
          <div className="">
            <img className="" src="/images/sapiens.svg" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className=" bg-slate-100 py-40">
        <h1 className="text-center text-3xl font-plusjak font-semibold">
          MY PROJECT
        </h1>

        {/* Grid */}
        <div className="mx-auto max-w-screen-2xl md:grid-cols-3 lg:grid-cols-3 grid grid-cols-1 gap-5 mt-10">
          {/* Project 1 */}
          <div className="p-5 border-4 rounded-xl border-black">
            <img className="mt-2" src="/images/project 1.jpeg" />
            <div className="grid grid-rows-2 mt-5">
              <div className="flex justify-between">
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
              <div className="flex justify-between">
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
              <div className="flex justify-between">
                <h3 className="text-xl font-bold ">Portofolio Website</h3>
                <a href="/">
                  <SendIcon />
                </a>
              </div>
            </div>
            <div className=" md:grid-cols-2 lg:grid-cols-2 grid grid-cols-1">
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

      {/* Section 3 */}
      <section className="max-w-5xl mx-auto py-60">
        <div className="p-3">
          <h4 className="text-xl font-plusjak font-normal">Learning Path</h4>
          <p className="text-2xl font-plusjak font-semibold">
            Skill & Education
          </p>
        </div>
        <div className="w-1 h-80 border-2 bg-black border-black"></div>
        <div className="w-15 h-15 bg-red-400 rounded-full"></div>
      </section>

      <div className="bg-gray-200 py-40">
        {/* Section 4 */}
        <section className="max-w-5xl mx-auto">
          {/* Posisi Kanan */}
          <h4 id="contact-me" className="text-3xl">
            Contact ME
          </h4>
          <div className="mt-10 grid grid-cols-2 gap-5">
            <div className="">
              <form className="grid grid-rows-1 gap-5 ml-2">
                <div className="">
                  <label></label>
                  <input
                    className="p-2 border-2 rounded-lg border-slate-900 w-full"
                    type="text"
                    name="Name"
                    placeholder="Name..."
                  />
                </div>
                <div className="">
                  <label></label>
                  <input
                    className="p-2 border-2 rounded-lg border-slate-900 w-full"
                    type="text"
                    name="Name"
                    placeholder="Name..."
                  />
                </div>
                <div className="">
                  <label></label>
                  <textarea
                    className="p-2 rounded-lg border-2 border-slate-900 w-full h-[200px]"
                    name="biografi"
                    placeholder="Name..."
                  ></textarea>
                </div>
                <a href="/buttons/6" className="send">
                  Button
                </a>
              </form>
            </div>
            {/* Posisi Kiri */}
            <div className="">
              <div className="flex items-center gap-8">
                <p className="">Check Out my:</p>
                <div className="mt-5 main">
                  <div className="up">
                    <button className="card1">
                      <InstagramIcon />
                    </button>
                    <button className="card2">
                      <TwitterIcon />
                    </button>
                    <button className="card3 mt-[100px] ml-[-195px]">
                      <GitHubIcon />
                    </button>
                    <a
                      href="https://discordapp.com/users/Bendol#3609"
                      target="_blank"
                    >
                      <button className="card4 mt-[100px] ml-[2px]">
                        <DiscordIcon />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="mt-20">
                    <LocIcon />
                    <h3 className="">Alamat</h3>
                    <p className="">Jl Rambutan V no.6</p>
                  </div>
                  <div className="mt-10">
                    <PhoneIcon />
                    <h3 className="">Phone</h3>
                    <p className="">(021)123456</p>
                  </div>
                  <div className="mt-10">
                    <EmailIcon />
                    <h3 className="">Email</h3>
                    <p className="">fuadfarchan272gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
