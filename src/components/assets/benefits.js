const benefits = {
    title: 'Capillary Schedule Benefits',
    componentID: 'benefitsPanel',
    data: 
        <div>
            As we said, the capillary schedule has three stages, <b>hydration, nutrition, and reconstruction</b>. Each of them has different benefits. 
            Find out more about them:
        </div>,
    articleList: [
        {
            id: 1,
            title: 'Hydration',
            data: `It combats the opacity of the threads, thus making them brighter and softer. So it avoids split ends and hair loss.`,
            imageURL: 'https://github.com/ArchanaSai/capillary-scheduler/blob/main/src/components/assets/images/jug.png',
            routeName: 'hydration'
        },
        {
            id: 2,
            title: 'Nutrition',
            data: `It reduces frizz, provides life and movement. Above all, it leaves the hair healthier and fuller. 
                   It also seals the cuticles and prolongs the effects of hair hydration.`,
            imageURL: 'https://github.com/ArchanaSai/capillary-scheduler/blob/main/src/components/assets/images/drops.jpg',
            routeName: 'nutrition'
        },
        {
            id: 3,
            title: 'Reconstruction',
            data: `It will recover your hair’s health because it restores the damage, and, as the name says, 
                   it reconstructs the hair fiber, returning the hair texture.`,
            imageURL: 'https://github.com/ArchanaSai/capillary-scheduler/blob/main/src/components/assets/images/chemistry.jpg',
            routeName: 'reconstruction'
        }
    ]
}
export default benefits