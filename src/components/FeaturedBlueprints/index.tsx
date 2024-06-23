import React from 'react';
import BlueprintCard from '../BlueprintCard';
import Blueprints from '../Blueprints';

const blueprints = [
    Blueprints.officialBlueprints[0],
    Blueprints.officialBlueprints[1],
    Blueprints.officialBlueprints[2],
];

export default function FeaturedBlueprints(): JSX.Element {
    return (
        <div className="hero shadow--lw">
            <div className="container">
                <h1 className='text--center'>Featured Blueprints</h1>
                <div className='card-demo'>
                    <div className='row'>
                    {blueprints.map((blueprint, index) => (
                        <BlueprintCard
                            key={index}
                            name={blueprint.name}
                            githubRepo={blueprint.githubRepo}
                            npmPackage={blueprint.npmPackage}
                            author={blueprint.author}
                            authorUrl={blueprint.authorUrl}
                            description={blueprint.description}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
