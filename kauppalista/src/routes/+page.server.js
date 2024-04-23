const lists= ['Kahvi', 'Ananas', 'Mango', 'Lisää' ]
export function load() {
	return {lists};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        console.log (data.get('list'));
	}
};