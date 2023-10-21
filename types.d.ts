declare module "$lib/data/bio.yaml" {
	interface Seccion {
		titulo: string;
		descripcion: string;
	}

	export const titulo: string;
	export const descripcion: string;
	export const secciones: Seccion[];
}

declare module "$lib/data/contacto.yaml" {
	export const titulo: string;
	export const introducion: string;
	export const nombre: string;
	export const numero: string;
	export const email: string;
}

declare module "$lib/data/nav.yaml" {
	interface Pagina {
		titulo: string;
		url: string;
		descripcion: string;
	}

	export const titulo: string;
	export const descripcion: string;
	export const navigacion: Pagina[];
}

declare module "$lib/data/servicios.yaml" {
	interface Servicio {
		titulo: string;
		precio: number;
		descripcion: string;
	}

	export const titulo: string;
	export const descripcion: string;
	export const servicios: Servicio[];
}
