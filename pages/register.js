import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import { useState } from "react";

import { CreateController } from "../api/controluser";

export default function Register() {
  const d = new Date("2000-07-20");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(22);
  const [phone_number, setphone_number] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await CreateController()
        .CreateUser({
          username,
          password,
          first_name,
          last_name,
          email,
          age,
          phone_number,
          date_of_birth,
        })
        .then(() => {
          // ทำสิ่งที่ต้องการกับข้อมูลที่ได้รับ
          // console.log(response.data);
          alert("Register Success!!!");
          window.location.replace('/');
        })
        .catch((error) => {
          // จัดการข้อผิดพลาด
          console.error(error);
        });
    } catch (error) {
      console.error(error);
      // ปรับปรุงการจัดการข้อผิดพลาดตามความเหมาะสม
    }
  };

  return (
    <main className="flex min-h-screen flex-col  bg-gradient-to-r from-purple-300 to-pink-300">
      {/* start : content */}
      <div className="rounded-[10px] bg-white shadow-md lg:ml-16 lg:mr-16 lg:mb-16 lg:mt-16 mt-5 mr-5 ml-5 mb-5 px-[25px] py-[40px] ">
        <div className="grid grid-cols-12 gap-0 mt-5 intro-y">
          <div className="col-span-12 intro-y lg:col-span-6 rounded-md -mt-4">
            <Image
              src="/pics.jpg"
              alt="Vercel Logo"
              className="dark:invert"
              width={900}
              height={900}
              priority
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="text-4xl font-bold text-center">Register</div>

            <div className="p-3 w-full">
              <div className="rounded-md shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">Usernames</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>

                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">firstname</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="first_name"
                      id="first_name"
                      value={first_name}
                      onChange={(e) => setfirst_name(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">lastname</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="last_name"
                      id="last_name"
                      value={last_name}
                      onChange={(e) => setlast_name(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">age</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      id="age"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">age</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="age"
                      id="age"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                    <label className="label"></label>
                  </div> */}
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">Phone number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="phone_number"
                      id="phone_number"
                      value={phone_number}
                      onChange={(e) => setphone_number(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">Birthday</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="date_of_birth"
                      id="date_of_birth"
                      value={date_of_birth}
                      onChange={(e) => setdate_of_birth(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control w-full pl-3 pr-3">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-white"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <label className="label"></label>
                  </div>

                  <div className="p-3 text-center  "><hr className="" />
                    <br />
                    or Login with
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <div className="mr-2 ">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar className border-gray-300">
                        <div className="w-10 rounded-full">
                          <Image
                            src="/gg.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                          />
                        </div>
                      </label>
                    </div>
                    <div className="mr-2 ">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar className">
                        <div className="w-10 rounded-full">
                          <Image
                            src="/facebook.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                          />
                        </div>
                      </label>
                    </div>
                    <div className="mr-2 ">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar className">
                        <div className="w-10 rounded-full">
                          <Image
                            src="/line.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={100}
                            height={24}
                            priority
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="ml-3 mt-3">
                    <div className="form-control w-56">
                      <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox checkbox-secondary checkbox-sm" />
                        <span className="label-text ">Accept <span className="text-pink-500">Terms and Conditions</span> </span>

                      </label>
                    </div>
                  </div>

                  <div className="p-3">
                    <button
                      type="submit"
                      className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-5"
                    >
                      Register
                    </button>
                  </div>
                  <div className="text-right mt-1 mb-3">
                    <Link
                      href="/"
                      className=" mr-3 text-pink-500 hover:text-pink-600 text-xs"
                    >
                      Already have an account?
                    </Link>
                    <br /> <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end : content */}
    </main>
  );
}
