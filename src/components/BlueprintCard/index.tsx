import React from "react";
import { IBlueprint } from "../Blueprints";

export default function BlueprintCard({ name, githubRepo, npmPackage, author, authorUrl, description }: IBlueprint) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <div className="card shadow--md">
                <div className="card__header">
                    <h3 className="margin-bottom--xs">{name}</h3>
                    <a href={authorUrl} target="_blank" rel="noopener noreferrer">
                        {author}
                    </a>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        <a
                            href={`https://www.github.com/${githubRepo}`}
                            target="_blank"
                            className="button button--secondary button--block"
                        >
                            Github
                        </a>
                        <a
                            href={`https://www.npmjs.com/package/${npmPackage}`}
                            target="_blank"
                            className="button button--secondary button--block"
                        >
                            NPM
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
