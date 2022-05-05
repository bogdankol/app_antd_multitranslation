import React from 'react';
import { Layout } from 'antd';
import mailgo from 'mailgo';
import { Routes, Route } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';

import Header from './components/base/Header';
import Footer from './components/base/Footer';
import HomePage from './components/pages/HomePage';
import EquipmentPage from './components/pages/EquipmentPage';
import AboutPage from './components/pages/AboutPage';
import LicensePage from './components/pages/LicensePage';
import ProductPage from './components/pages/ProductPage';
import { serviceOperations, serviceSelectors } from './redux/service'; 

import styles from './App.module.css';
import './components/translations';

const { Content } = Layout;
mailgo();

function App() {
	const triggerCurrent = useSelector(serviceSelectors.getModalTrigger);
	const dispatch = useDispatch();

	function onClickHandler () {
		dispatch(serviceOperations.modalTrigger({trigger: !triggerCurrent}));
	}

	const onSubmit = data => {
		console.log({data});
	};

	return (
		<div className={styles.mainDiv}>
			<Layout style={{
				padding: '10px 100px',
				backgroundColor: 'transparent',
				maxWidth: '1600px'
			}}>
				<Header />
				<Content className={styles.content}>
					<Routes>
						<Route path="/home" element={<HomePage onClickHandler={onClickHandler} onSubmit={onSubmit} />} />
						<Route path="/equipment" element={<EquipmentPage onClickHandler={onClickHandler} onSubmit={onSubmit} />} />
						<Route path="/equipment/:product/:id" element={<ProductPage onClickHandler={onClickHandler} onSubmit={onSubmit}  />} />
						<Route path="/about" element={<AboutPage onClickHandler={onClickHandler} onSubmit={onSubmit} />} />
						<Route path="/license" element={<LicensePage />} />
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<HomePage />} />
					</Routes>
				</Content>
				<Footer />
			</Layout>
		</div>
    
	);
}

export default App;
