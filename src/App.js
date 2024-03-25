import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import First from './components/First'
import { useState } from 'react'

function App() {
	const balans = useSelector(state => state.money)
	const dispatch = useDispatch()

	const { todo } = useSelector(s => s)

	console.log(todo)

	const [values, setValues] = useState({
		name: '',
		age: ''
	})

	function add() {
		dispatch({ type: 'ADD_MONEY', payload: 100 })
	}

	function get() {
		dispatch({ type: 'GET_MONEY', payload: 100 })
	}

	function addUser() {
		dispatch({ type: 'ADD_USER', payload: values })
	}

	return (
		<div className='App'>
			<First />
			<button onClick={() => add()}>add</button>
			<h1>{balans}</h1>
			<button onClick={() => get()}>get</button>
			<div className='main'>
				<input
					onChange={e => setValues({ ...values, name: e.target.value })}
					type='text'
					placeholder='name'
				/>
				<input
					onChange={e => setValues({ ...values, age: e.target.value })}
					type='text'
					placeholder='age'
				/>
				<button onClick={() => addUser()}>add</button>

				{todo.length > 0 ? (
					todo.map(el => (
						<div>
							<h1>{el.name}</h1>
							<h1>{el.age}</h1>
						</div>
					))
				) : (
					<h1>Loading....</h1>
				)}
			</div>
		</div>
	)
}

export default App
