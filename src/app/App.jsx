import { Home } from '../page/home/home'
import { Registration } from '../page/registration/registration'
import { Header } from '../widgets/header/header'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<Header title="Ogogo" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
			{/* <Footer /> */}
		</>
	)
}
