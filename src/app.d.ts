// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module "./src/lib/data/bio.yaml" {
	interface Seccion {
		titulo: string;
		descripcion: string;
	}

	export const descripcion: string;
	export const secciones: Seccion[];
}

export {};
