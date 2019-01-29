import React, {Component} from 'react';


class form extends Component {

    constructor() {
        super();
        //récupérer le this du composant
        this.submitBinded = this.onSubmit.bind(this);


    }


    onSubmit(e) {
        e.preventDefault();


        //Récupérer la valeur de l'élément "city" + la mettre dans une constante car pas de modif en vu.
        const city = e.currentTarget.elements.city.value;
        const type = e.currentTarget.elements.type.value;
        let data = {
            city: city,
            type: type
        };

        this.props.onData(data);

        //console.log('type', type);

    }


    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>

                <label>Géolocalisation</label>
                <input type='radio' name="type" value="geo"/>

                <br/>
                <label>Nom de la ville</label>
                <input type="radio" name="type" value="city"/>
                <br/>
                <input type={"text"} name={"city"}/>
                <button>envoyer</button>
            </form>
        )
    }
}

export default form;