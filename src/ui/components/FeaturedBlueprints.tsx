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
        header: 'Personal Tree',
        meta: '@subjektifylabs',
        description: 'Create and manage a virtual personal tree.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/personal-tree',
    },
    {
        header: 'Decentralized Blog',
        meta: '@subjektifylabs',
        description: 'A blueprint for a decentralized blogging platform.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/decentralized-blog',
    },
    {
        header: 'NFT Marketplace',
        meta: '@subjektifylabs',
        description: 'Launch your own NFT marketplace with this blueprint.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/nft-marketplace',
    },
    {
        header: 'DAO Governance',
        meta: '@subjektifylabs',
        description: 'Set up a DAO governance structure.',
        image: 'https://avatars.githubusercontent.com/u/146701492',
        link: '/docs/blueprints/dao-governance',
    }
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
