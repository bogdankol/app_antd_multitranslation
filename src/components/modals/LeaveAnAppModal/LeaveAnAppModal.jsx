import React from 'react';
import { Modal } from 'antd';
import {useSelector} from 'react-redux';

import LogoSvg from '../../../assets/icons/ScientificEquipment';
import AppForm from '../../forms/AppForm';
import { serviceSelectors } from '../../../redux/service';

import styles from './LeaveAnAppModal.module.css';

function LeaveAnAppModal({ onCancel, onSubmit}) {
	const triggerCurrent = useSelector(serviceSelectors.getModalTrigger);

	return (
		<>
			<Modal 
				visible={triggerCurrent} 
				onCancel={onCancel} 
				title={<div className={styles.logoDiv}>
					<LogoSvg className={styles.svg}/>
				</div>}
				footer={null} 
			>
				<AppForm onSubmit={onSubmit} />
			</Modal>
		</>
	);
}

export default LeaveAnAppModal;