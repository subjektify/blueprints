import Blueprints from "../Blueprints";
import BlueprintCard from "../BlueprintCard";

export default function OfficialPlugins(): JSX.Element {
    return (
        <div className='card-demo'>
            <div className='row'>
                {Blueprints.officialBlueprints.map((blueprint, index) => (
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
    )
}
