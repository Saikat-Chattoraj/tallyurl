import Link from "next/link";
import { useState, useEffect } from 'react'

export default function ShortenUrl({ btnText }) {
  useEffect(() => (setSurl(window.location.href.replace('?', ""))), [])
	const [longUrl, setLongUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [userHash, setUserHash] = useState("123456");
	const [surl, setSurl] = useState();
	const handleLongUrl = (e) => {
		setLongUrl(e.target.value)
	}
	const handleShortUrl = (e) => {
		setShortUrl(e.target.value)
    e.preventDefault();
	}

	const urlPattern="(http|https)://([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?"

	const handleSubmit = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ shortUrl: `${shortUrl}`, longUrl: `${longUrl}`, userId: `${userHash}` })
		};
		const res = await fetch(`/api/v1/update/${shortUrl}?authHash=${userHash}&lurl=${longUrl}`, requestOptions)
		const response = await res.json();
		setSurl(response.data.shortUrl)
		console.log(response.success)
	}
  return (
    <div className="flex py-6 bg-gray-800 ">
      <div className="flex w-2/3 m-auto place-items-center">
        <div className="flex flex-col m-auto w-full ">
          <form className="flex justify-around" onSubmit={handleSubmit}>
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left "
              type="text"
              placeholder="Shorten your URL"
              onChange={handleLongUrl} pattern={urlPattern} required
            />
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left "
              type="text"
              placeholder="Shorten your URL"
              onChange={handleShortUrl} required
            />
            <div className="flex">
              <button type="submit" value={btnText}  className="flex bg-yellow-500 text-white px-28 py-4 rounded-md hover:bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-400 active:ring-2">
                Shorten
              </button>
            </div>
            {surl ? <p className="mr-auto row-span-1 col-span-full text-sm font-bold">{"The Short URL is "}<a className="text-blue-600 underline cursor-pointer" href={`${surl}${shortUrl}`}>{`${surl}${shortUrl}`}</a></p> : null}
          </form>
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
