export class Spent {

    private raison: string;
    private valeur: number;
    private description: string;
    private categorie: string;

    public $dom: JQuery<HTMLElement>;

	constructor(
        raison: string, 
        valeur: number, 
        description: string, 
        categorie: string
    ) {
		this.raison = raison;
		this.valeur = valeur;
		this.description = description;
		this.categorie = categorie;
    }

    display( $parent: JQuery<HTMLElement> ): void {

        let div: string =  "<div class='spent'>";
            div += "<h3>" + this.raison + "</h3>";
            div += "<h4>" + this.valeur + "</h4>";
            div += "</div>";

        this.$dom = $(div);

        $parent.append( this.$dom );

    }

}