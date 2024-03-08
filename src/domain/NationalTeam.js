export class NationalTeam {
	constructor(nationalTeam) {
		this.id = nationalTeam.id
		this.pais = nationalTeam.pais
		this.nombreConfederacion = nationalTeam.nombreConfederacion
		this.copasDelMundo = nationalTeam.copasDelMundo
	}

	toJSON() {
		return {
			id: this.id,
			pais: this.pais,
			nombreConfederacion: this.nombreConfederacion,
			copasDelMundo: this.copasDelMundo,
		}
	}
}
