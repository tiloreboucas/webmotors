import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import { Loader, Alert } from './components';
import { Header } from './common';

const MainPage = React.lazy(() => import('./pages/main'));

function App(props) {
	return <Suspense fallback={<Loader show={true} />}>
		<Loader {...props.loading} />
		<Alert {...props.error} />
		<Header />
		<MainPage />
	</Suspense>;
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error
	}
}

export default connect(mapStateToProps, null)(App);
