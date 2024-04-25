import { fail } from '@sveltejs/kit';

const lists= ['Kahvi', 'Ananas', 'Mango', 'Lisää' ]

export function load() {
	return {lists};
}

export const actions = {
	addNew: async ({ request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		const list =(data.get('a')?.trim() ?? '');
		console.log (list);
		if (!list.trim())
		{
			return fail(422, {
				list: list,
				error: 'Ei saa olla tyhjä',
		});
		}

		if (lists.includes(list)) {
			return fail(422, {
				list: list,
				error: 'Asia oli jo listalla ',
		});
		
		}
		lists.push(list);
	},
};