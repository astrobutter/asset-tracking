import Image from "next/image";
import Link from "next/link";
import { FaRegUser, FaMoon } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { TbBrandSuperhuman } from "react-icons/tb";
import { IoMdHelpCircle } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import CameraModal from "./(component)/CameraModal";

export default function Home() {
  const assetDetails = [
    { id: '1001', name: 'Forklift A', status: 'Active', location: 'Warehouse 1' },
    { id: '1002', name: 'Shipping Container B', status: 'In Transit', location: 'In Route' },
    { id: '1003', name: 'Pallet Jack C', status: 'Maintenance', location: 'Warehouse 2' },
    { id: '1004', name: 'Conveyor D', status: 'Active', location: 'Warehouse 3' },
  ]
  return (
    <div className="flex flex-col gap-[2rem] justify-center items-center p-[1rem] relative">
      <div className="w-full max-w-[1200px] flex justify-between gap-[1rem] ">
        <h1 className="text-[2rem] font-bold">INTELLIGENT ASSET TRACKING</h1>
        <div className=" flex justify-end self-center gap-[1rem] text-[1.5rem]">
          <Link href="/">Dashboard</Link>
          <Link href="/">Assets</Link>
          <Link href="/">Reports</Link>
          <Link href="/">Settings</Link>
          <button type="button" className="rounded-[15px] hover:cursor-pointer bg-[#333942] px-5 py-[2px]">Login</button>
          <button type="button" className="text-white text-[1.2rem] rounded-[25px] hover:cursor-pointer bg-[#333942] px-3 py-[2px]"><FaRegUser className="text-white" /></button>
        </div>
      </div>
      <div className="w-full max-w-[1200px] grid grid-cols-3 gap-[1rem] ">
        <CameraModal title={'Camera 1'}/>
        <CameraModal title={'Camera 2'}/>
        <CameraModal title={'Camera 3'}/>
      </div>
      <div className="w-full max-w-[1200px] grid grid-cols-[7fr_5fr] gap-[2rem] ">
        <div className="flex flex-col gap-[2rem]">
          <div className="w-full bg-[#1b1e23] flex gap-[1rem] p-3 px-4 rounded-[10px]">
            <div className="text-[1.5rem] bg-[#2B2C33] w-full flex items-center gap-[1rem] p-2 rounded-[10px]">
              <IoIosSearch />
              <input
                type="search"
                placeholder="Search Assets"
                className="w-full border-none bg-none focus:outline-none"
              />
            </div>
            <button type="button" className="text-[1.5rem] bg-[#2B2C33] rounded-[10px] px-4">
              Filter
            </button>
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <p className="text-[1.5rem] font-semibold">Asset Locations</p>
            <video
              src="/topdown_ids_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-[10px]"
            />
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <p className="text-[1.5rem] font-semibold">Assets Overview</p>
            <div className="grid grid-cols-3 gap-[1rem]">
              <div className="bg-[#2B2C33] p-3 px-4 rounded-[10px]">
                <div className="text-[2.5rem] font-semibold">320</div>
                <div className="">Total Assets</div>
              </div>
              <div className="bg-[#2B2C33] p-3 px-4 rounded-[10px]">
                <div className="text-[2.5rem] font-semibold">8</div>
                <div className="">In Transit</div>
              </div>
              <div className="bg-[#2B2C33] p-3 px-4 rounded-[10px]">
                <div className="text-[2.5rem] font-semibold">5</div>
                <div className="">Maintenance Due</div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <div className="w-full flex justify-between items-center">
              <p className="text-[1.5rem] font-semibold">Assets Details</p>
              <div className="flex items-center opacity-70 gap-[0.5rem] hover:cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <p>Darch mode </p>
                <p className="text-[1.5rem]"> <MdKeyboardArrowRight /></p>
              </div>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2B2C33] rounded-[10px]">
                  <th className="p-3 text-left rounded-tl-[10px]">Asset Id</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left rounded-tr-[10px]">Location</th>
                </tr>
              </thead>
              <tbody>
                {assetDetails?.map((item) => (
                  <tr key={item.id} className="border-1 border-[#2B2C33]">
                    <td className="p-3">{item.id}</td>
                    <td>{item.name}
                    </td>
                    <td>{item.status}
                    </td>
                    <td>{item.location}
                    </td>
                  </tr>
                )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-4 rounded-[10px]">
            <p className="text-[1.5rem] font-semibold">Recent Alerts</p>
            <div className="flex flex-col gap-[1rem]">
              <div className="flex gap-[1rem] bg-[#2B2C33] p-3 px-4 rounded-[10px]">
                <div className="text-[1.5rem] my-auto"><IoIosWarning /></div>
                <div className="">
                  <div className="text-[1.25rem] font-semibold">Unauthorized access detected for Asset ID 12549</div>
                  <div className="opacity-70">2 hours ago</div>
                </div>
              </div>
              <div className="flex gap-[1rem] bg-[#2B2C33] p-3 px-4 rounded-[10px]">
                <div className="text-[1.5rem] my-auto"><IoIosWarning /></div>
                <div className="">
                  <div className="text-[1.25rem] font-semibold">Asset ID 2860 is in a restricted area</div>
                  <div className="opacity-70">6 hours ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[1.75rem]"><TbBrandSuperhuman /></p>
              <p className="text-[1.5rem] font-semibold">kam mode</p>
            </div>
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[1.75rem]"><IoMdHelpCircle /></p>
              <p className="text-[1.5rem] font-semibold">Help</p>
            </div>
            <div className="flex gap-[1rem] items-center">
              <p className="text-[1.75rem]"><MdFeedback /></p>
              <p className="text-[1.5rem] font-semibold">Feedback</p>
            </div>
          </div>

          <div className="rounded-[15px] p-3 bg-[#1b1e23] flex flex-col gap-[1rem]" >
            <div className="text-[1.5rem] font-semibold">Analytics and Reports</div>
            <Image src="/reports.png"
              width={500}
              height={500}
              alt="reports"
            />
            <div className="text-[1.25rem] ">Usage Statistics</div>
          </div>

          <div className="w-full bg-[#1b1e23] flex gap-[1rem] justify-between p-3 px-4 rounded-[10px]">
            <div className="flex gap-[1rem] items-center">
              <p className="text-[1.75rem]"><FaMoon /></p>
              <p className="text-[1.25rem] font-semibold">Dark mode</p>
            </div>
            <div className="flex items-center bg-[#2B2C33] rounded-[10px]  px-4 opacity-70 gap-[0.5rem] hover:cursor-pointer hover:opacity-100 transition-opacity duration-300">
              <p className="text-[1.5rem]">Danda</p>
              <p className="text-[1.5rem]"> <MdKeyboardArrowRight /></p>
            </div>
          </div>

          <div className="w-full bg-[#1b1e23] flex flex-col gap-[1rem] p-3 px-4 rounded-[10px]">
            <div className="flex gap-[1rem] justify-between items-center border-b-1 pb-4 border-[#2B2C33]">
              <p className="text-[1.5rem] font-semibold">Help</p>
              <button type="button" className="text-[1.25rem] bg-[#2B2C33] rounded-[10px] p-2 px-4 opacity-70 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
                FAQs Support
              </button>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1.5rem] font-semibold">Feedback</p>
              <p className="text-[1.5rem] font-semibold">Submit Feedback</p>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
