import react from 'react';
import './BrandBar.css';

export default function BrandBar(props) {

    return (

        <div className="brand-background">
            <div className="brand-bar">
                <img src="https://images.squarespace-cdn.com/content/v1/55c0d7e5e4b05b835010c1f4/1539962823404-JR6O0ARXXV6KVUVV8PCX/Cedar+Waxwing+on+berries+KCA.jpg?format=1500w" alt="Cedar Waxwings" className="brand-image" />
                <div className="brand-text">
                    <h1 className="brand-title">{props.title}</h1>
                    <p className="brand-description">{props.description}</p>
                </div>
                <img src="https://nas-national-prod.s3.amazonaws.com/h_apa_2016-a1_2474_8_cedar_waxwing_peter_brannon_kk_female.jpg" alt="Waxwing" className="brand-image" />
            </div>
        </div>
    )
} 