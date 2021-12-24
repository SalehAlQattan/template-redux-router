import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from './actions/postActions'
import './App.css'

function App() {
	const dispatch = useDispatch()

	const postList = useSelector((state) => state.postList)
	const { loading, error, posts } = postList

	useEffect(() => {
		dispatch(listPosts())
	}, [dispatch])

	return (
		<div className='App'>
			<header className='App-header'>
				<h2>
					Starter Template for <br />
					Redux & React Router <br /> Using JSON Placeholder API
				</h2>
				<>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h3>{error}</h3>
					) : (
						<>
							<h2>There is no loading or error</h2>
							{posts.map((post) => (
								<div style={{ width: '85%', margin: '0 auto' }} key={post.id}>
									<h3>{post.title}</h3>
									<p>{post.body}</p>
								</div>
							))}
						</>
					)}
				</>
			</header>
		</div>
	)
}

export default App
