import Link from "next/link";
import Image from "next/image";
import { Wifi, Anchor, Calendar, Fan, Bed, Ruler } from "lucide-react";
import { Trip } from "@/lib/types";

export default function PostItem({ ...props }: Trip) {
  return (
    <div
      className={`[&:nth-child(-n+12)]:-order-1 group ${
        !props.sticky && "border-b border-gray-200"
      }`}
    >
      <div className={`px-4 py-6 hover:bg-indigo-100`}>
        <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
          <div className="shrink-0 w-[150px] h-[100px]">
            <Image
              src={props.boat?.images[0].url || ""}
              width={150}
              height={100}
              alt={props.boat?.images[0].alt || ""}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
            <div>
              <div className="flex datas-start space-x-2">
                <div className="text-sm text-indigo-500 font-nycd mb-1">
                  {props.boat?.name}
                </div>
                {props.sticky && (
                  <svg
                    className="w-3 h-3 shrink-0 fill-amber-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.143 5.143A4.29 4.29 0 0 1 6.857.857a.857.857 0 0 0-1.714 0A4.29 4.29 0 0 1 .857 5.143a.857.857 0 0 0 0 1.714 4.29 4.29 0 0 1 4.286 4.286.857.857 0 0 0 1.714 0 4.29 4.29 0 0 1 4.286-4.286.857.857 0 0 0 0-1.714Z" />
                  </svg>
                )}
              </div>
              <div className="mb-2">
                <Link
                  className="text-lg text-gray-800 font-bold"
                  href={`/trips/${props.id}`}
                >
                  {props.title}
                </Link>
              </div>
              {/* cabins */}
              <div className="flex flex-wrap gap-4 mb-3">
                {props.boat?.features?.cabins && (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Bed className="w-3 h-3 mr-1" />
                    Cabins: {props.boat.features.cabins}
                  </div>
                )}
                {/* berths */}
                {props.boat?.berth_count && props.boat.berth_count > 0 ? (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Anchor className="w-3 h-3 mr-1" />
                    Berths: {props.boat.berth_count}
                  </div>
                ) : (
                  <></>
                )}
                {/* air conditioning */}
                {props.boat?.specifications?.equipment?.includes(
                  "Air Conditioning"
                ) && (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Fan className="w-3 h-3 mr-1" />
                    Air condition
                  </div>
                )}
                {/* wifi */}
                {props.boat?.specifications?.equipment?.includes("Wifi") && (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Wifi className="w-3 h-3 mr-1" />
                    Wifi
                  </div>
                )}
                {/* refit */}
                {props.boat?.last_refit && (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Calendar className="w-3 h-3 mr-1" />
                    Refit: {props.boat.last_refit}
                  </div>
                )}
                {/* length */}
                {props.boat?.length_meters && (
                  <div className="inline-flex items-center text-xs text-gray-600 whitespace-nowrap">
                    <Ruler className="w-3 h-3 mr-1" />
                    Length: {Math.round(props.boat.length_meters)} m
                  </div>
                )}
              </div>
              <div className="-m-1">
                <a
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${
                    props.sticky ? "bg-indigo-50" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {props.tag1}
                </a>
                <a
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${
                    props.sticky ? "bg-indigo-50" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {props.tag2}
                </a>
                <a
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${
                    props.sticky ? "bg-indigo-50" : "bg-gray-100"
                  }`}
                  href="#0"
                >
                  {props.tag3}
                </a>
              </div>
            </div>
            <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                <Link
                  className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm"
                  href={`/trips/${props.id}`}
                >
                  Check it out{" "}
                  <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className="group-hover:lg:hidden text-sm italic text-gray-500">
                Available from {props.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
