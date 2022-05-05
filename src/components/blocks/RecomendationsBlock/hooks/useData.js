import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import vatiantsOfCategories from '../../../../project-service/variantsOfCategories.json';

function useData(product) {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	const {t, i18n} = useTranslation();
	const {language} = i18n;

	useEffect(() => {
		setCategories(vatiantsOfCategories.filter(el => el !== product));
	}, [product]);

	useEffect(() => {
		const arr = categories.map(el => ({
			src: t(`recomendationData:${el}.src`),
			title: t(`recomendationData:${el}.title`),
			text: t(`recomendationData:${el}.text`),
			link: t(`recomendationData:${el}.link`)
		}));

		setData(arr);
	}, [categories, language]);

	return {data};
}

export default useData;