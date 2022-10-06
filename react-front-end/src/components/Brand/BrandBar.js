import react from 'react';

export default function BrandBar(props) {

    return (

        <div className="brand-background">
            <div className="brand-bar">
                <img src="https://www.lyricbirdfood.com/media/1271/gettyimages-466098911.jpg?crop=0.0000000000000002526374171591,0.13733624161198763,0,0.075408856427228263&cropmode=percentage&width=700&height=365&rnd=132743519270000000" alt="brand" />

                <div className="brand-text">
                    <h1 className="brand-title">{props.title}</h1>
                    <p className="brand-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
} 