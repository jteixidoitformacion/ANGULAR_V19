loader: async ({ request }) => {
const url = `https://jsonplaceholder.typicode.com/users/${request.id}`;
const response = await fetch(url);
if (!response.ok) throw new Error('Usuario inexistente');
return await response.json() as User;
}
});
actualizarId(event: Event) {
const input = event.target as HTMLInputElement;
const value = parseInt(input.value, 10);
if (!isNaN(value)) {
this.userId.set(value);
}
}
}
