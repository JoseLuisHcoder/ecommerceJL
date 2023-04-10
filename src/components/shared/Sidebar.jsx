import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import {
	RiHome5Fill,
	RiAccountPinCircleFill,
	RiAppsFill,
	RiShoppingBagFill,
	RiLogoutCircleRLine,
} from 'react-icons/ri'

const Sidebar = () => {
	const navbar = useRef()
	// console.log(navbar.current);

	const clickMenuHam = () => {
		navbar.current.classList.toggle('header__nav__open')
	}
	return (
		<sidebar className='bg-[#1F1D2B] fixed left-0 top-0 w-16 h-full'>
			<nav ref={navbar} className='flex flex-col justify-between h-full'>
				<div>
					<ul className='pl-2'>
						<li>
							<NavLink className='flex justify-center ' to='/'>
								<div className='mt-2'>
									<img className='w-12' src='./logdz.png' alt='' />
								</div>
							</NavLink>
							<div onClick={clickMenuHam} className='header__menuimg'>
								<i className='bx bx-menu'></i>
							</div>
						</li>
						<li className='bg-[#262837]  p-2 rounded-tl-xl rounded-bl-xl'>
							<NavLink
								className='bg-[#ec7c6a] p-2 w-10  flex justify-center rounded-xl text-white'
								to='/'
							>
								<RiHome5Fill className='text-xl text-white' />
							</NavLink>
						</li>

						<li className='hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl group transition-colors'>
							<NavLink
								className='group-hover:bg-[#ec7c6a] p-2 w-10  flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'
								to='/login'
							>
								<RiAccountPinCircleFill className='text-xl ' />
							</NavLink>
						</li>

						<li className='hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl group transition-colors'>
							<NavLink
								className='group-hover:bg-[#ec7c6a] p-2 w-10  flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'
								to='/purchases'
							>
								<RiAppsFill className='text-xl ' />
							</NavLink>
						</li>

						<li className='hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl group transition-colors'>
							<NavLink
								className='group-hover:bg-[#ec7c6a] p-2 w-10  flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'
								to='/cart'
							>
								<RiShoppingBagFill className='text-xl ' />
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<ul className='pl-2'>
						<li className='hover:bg-[#262837] p-2 rounded-tl-xl rounded-bl-xl group transition-colors'>
							<NavLink
								className='group-hover:bg-[#ec7c6a] p-2 w-10  flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'
								to='/cart'
							>
								<RiLogoutCircleRLine className='text-xl ' />
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</sidebar>
	)
}

export default Sidebar
