import getCompetitors from '../utils/getCompetitors';

const Competitor = async(level)=>{
    const competitors = await getCompetitors(level);
    var view = "";
    competitors.forEach(competitor => {
        view += `
        <div class="content-competitors--board">
            <div class="competitor-container">
                <p>${competitor.Name}</p>
                <div class="score-container">
                    <div class="score-bar" style="width: 60%;">
                        <p>${competitor.Account.Name}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    return view;
};

export default Competitor;