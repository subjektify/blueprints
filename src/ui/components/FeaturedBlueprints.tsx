import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
    Image,
    Icon,
} from 'semantic-ui-react';

const blueprints = [
    {
        header: 'Vite React TypeScript',
        meta: '@subjektifylabs',
        description: 'A Vite-powered React application with TypeScript.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/vite-react-ts',
    },
    {
        header: 'Solidity Hardhat',
        meta: '@subjektifylabs',
        description: 'Develop and test smart contracts using Hardhat and Solidity.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/solidity-hardhat',
    },
    {
        header: 'Serverless API TypeScript',
        meta: '@subjektifylabs',
        description: 'Create a serverless API using AWS Lambda and TypeScript.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/serverless-api-ts',
    },
    {
        header: 'Node.js Express TypeScript',
        meta: '@subjektifylabs',
        description: 'A Node.js application using Express and TypeScript.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/nodejs-express-ts',
    },
];

export const FeaturedBlueprints = () => {
    return (
        <CardGroup itemsPerRow={4}>
            {blueprints.map((blueprint, index) => (
                <Card key={index} href={blueprint.link}>
                    <CardContent>
                        <Image
                            floated='right'
                            size='mini'
                            src={blueprint.image}
                        />
                        <CardHeader>
                            {blueprint.header} <Icon name='check circle' color='green' />
                        </CardHeader>
                        <CardMeta>{blueprint.meta}</CardMeta>
                        <CardDescription>
                            {blueprint.description}
                            <br />
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </CardGroup>
    );
};
