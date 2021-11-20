import Link from "next/link";
export default function ShortenUrl() {
  return (
    <div className="flex py-6 bg-gray-800 ">
      <div className="flex w-2/3 m-auto place-items-center">
        <div className="flex flex-col m-auto w-full ">
          <div className="flex justify-around">
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left "
              type="text"
              placeholder="Shorten your URL"
            />
            <div className="flex">
              <button className="flex bg-yellow-500 text-white px-28 py-4 rounded-md hover:bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-400 active:ring-2">
                Shorten
              </button>
            </div>
          </div>
          <div className=" gap-2 flex pl-28 mt-1">
            <div className="flex text-gray-400">
              
            </div>
            <div
              id="termslink"
              className="flex hover:text-indigo-600 hover:underline text-gray-400"
            >
              <Link href="https://github.com/Saikat-Chattoraj/tallyurl/">
                <a> Github Link </a>
              </Link>
            </div>
            <div className="flex text-gray-400"></div>
            <div
              id="privacylink"
              className="flex hover:text-indigo-600 hover:underline text-gray-400"
            >
              <Link href="/">
                <a> </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
