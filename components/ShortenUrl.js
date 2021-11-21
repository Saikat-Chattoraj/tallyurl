import Link from "next/link";
import { useState, useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}


const ShortenUrl = ({btnText}) => {
  useEffect(() => (setSurl(window.location.href.replace('?',"" ))), [])
  // useEffect(() => (window.onload = ransh(), []))
  // if shortUrl == ""{
	const ranurl = makeid(5)
  const [isScrolled, setIsScrolled] = useState(false);
  const [longUrl, setLongUrl] = useState("");
	const [shortUrl, setShortUrl] = useState(ranurl);  
	const [userHash, setUserHash] = useState("123456");
	const [surl, setSurl] = useState();
  const [copy, setCopy] = useState("false")
	const handleLongUrl = (e) => {
		setLongUrl(e.target.value)
	}
	const handleShortUrl = (e) => {
		setShortUrl(e.target.value)
    e.preventDefault();
	}
	const urlPattern="((https|http)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"

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
    <div className="w-2/3 place-items-center m-auto">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex">
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left mr-4 outline-blacksolid mt-11 "
              type="text"
              placeholder="Shorten your URL"
              onChange={handleLongUrl} pattern={urlPattern} required
            />
            <input
              className="h-full w-2/3 px-2 py-5 rounded-lg text-left outline-blacksolid mt-11 "
              type="text"
              placeholder="Customise given Short URL(Optional)"
              onChange={handleShortUrl}  
            />
          </div>
          <div className="ml-96 pl-24 mt-11">
              <button type="submit" value={btnText}  className=" bg-yellow-500 text-white font-bold text-2xl px-28 py-4 rounded-md hover:bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-400 active:ring-2">
                Shorten
              </button>
              </div>
              <div className="ml-96 pl-8 mt-11">
           {surl && longUrl ? <p className="mr-auto row-span-1 col-span-full font-bold mt-11 text-xl">{"The Short URL is "}<a className="text-blue-600 underline cursor-pointer" href={`${surl}${shortUrl}`}>{`${surl}${shortUrl}`}</a></p> : null}
            </div>
            <div className="ml-96 pl-32 mt-11">
            <CopyToClipboard text={surl+""+shortUrl}
          onCopy={() => setCopy("true")}>
          <button type="button" className="bg-yellow-400 py-3 px-4 rounded-md active:bg-green-700 ml-10 text-md text-white ">Copy to clipboard</button>
        </CopyToClipboard>
        </div>
        
          </form>
    </div>
  )   
}

export default ShortenUrl
