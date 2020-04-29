import getData from "./getData";

const getCompetitors = async (level)=>{
    const data = await getData();
    let competitors;

    switch(level){
        case 'beginner':
            competitors = data.filter(competitor => competitor.Account.Name == 'sForce');
            break;
        case 'intermediate':
            competitors = data.filter(competitor => competitor.Account.Name == 'GenePoint');
            break;
    }

    return competitors;
}

export default getCompetitors;