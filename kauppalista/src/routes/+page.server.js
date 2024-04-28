import { fail } from '@sveltejs/kit';
import {lataaKauppalista, luoKauppalistanAsia} from '$lib/api';

const LISTA_ID = '676dcru6dxt8bjh';

export async function load() {
	const lists = await lataaKauppalista(LISTA_ID);
	return {lists};
}

export const actions = {
	addNew: async ({ request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		const list =(data.get('a')?.trim() ?? '');
		try {
			await luoKauppalistanAsia(LISTA_ID, list);
		} catch(error) { 
		}
	},
};