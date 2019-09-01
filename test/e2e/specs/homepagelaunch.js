let Homepage = require('../pages/homepage');

const homepage = new Homepage();
describe ('launch the amazon home page', () => {
    it ('should open the home page', () => {
        homepage.launchwebsite();
    })

    it ('verify the Title of the home page', () => {
        homepage.verifytitle();
    })
})