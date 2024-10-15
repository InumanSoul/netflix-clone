import { Link } from 'react-router-dom';

export default function MainNavigation() {
	return (
		<header>
			<nav className='main-nav'>
				<div className='left-actions'>
					<Link to={'/'}>
						<img src='/netflix-logo.svg' alt='Netflix' className='brand' />
					</Link>
					<ul>
						<li>
							<Link to={'/'}>Home</Link>
						</li>
						<li>
							<Link to={'/tv-shows'}>TV Shows</Link>
						</li>
						<li>
							<Link to={'/movies'}>Movies</Link>
						</li>
						<li>
							<Link to={'/recently-added'}>Recently Added</Link>
						</li>
						<li>
							<Link to={'/my-list'}>My List</Link>
						</li>
					</ul>
				</div>
				<div className='right-actions'>
					<input type='text' placeholder='Search' className='main-search' />
					<div>
						<img
							src='https://placehold.co/50'
							alt='Avatar'
							className='user-profile'
						/>
					</div>
				</div>
			</nav>
		</header>
	);
}
