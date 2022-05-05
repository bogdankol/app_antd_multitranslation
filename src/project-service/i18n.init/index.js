import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '../../components/translations/index';

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'ua'
	});

export default i18n;