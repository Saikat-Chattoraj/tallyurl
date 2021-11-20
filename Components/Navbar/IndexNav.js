import Link from 'next/link'
import { LoginButton } from './LoginButton/LoginButton'

export const IndexNav = () => {
	const NavLinks = ['home', 'about', 'contact']
  
	return (
		<>
			<div className="w-full shadow-xl z-50 flex flex-wrap fixed top-0 bg-white py-2 justify-center items-center">
				<div className="w-full flex flex-wrap justify-between items-center p-1 m-auto">
					<div><i className="fas fa-route"></i></div>
					<div className="px-2 mr-auto text-2xl font-bold font-sans transition-all duration-500 ease-in-out hover:underline">Minirls</div>
					<div className="flex flex-wrap md:flex-no-wrap ml-auto font-bold text-sm">
						{NavLinks.map((NavLink, Navkey) => (
							<Link href={`/#${NavLink.toLowerCase()}`} key={Navkey}>
								<a className="p-2 hover:bg-gray-200 tracking-wider border-b-2 border-l-2 border-gray-300 px-2 rounded mx-2 shadow-lg z-70 hover:transform hover:scale-95">{NavLink.toUpperCase()}
								</a>
							</Link>))
						}
					</div>
					<LoginButton />
				</div>
			</div>
		</>
	)
}