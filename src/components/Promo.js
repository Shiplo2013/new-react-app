import PromoContent from './PromoContent';

const data = {
    title: "Don't miss this deal!",
    desc: "Subscribe to my newsletter and get all the shop items at 50% off!"
}
function Promo() {
    return(
        <div className="promo-section">
            <h1>Promo</h1>
            <PromoContent title={ data.title } desc={ data.desc } />
        </div>
    );
};

export default Promo;