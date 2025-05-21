const {LoginPage}=require('../PageObjects/LoginPage');
const {DashBoardPage}=require('../PageObjects/DashBoardPage');
class POmanager
{
    constructor(page)
    {
        this.page=page;
        this.LoginPage=new LoginPage(this.page);
    
    }


    getLoginPage()
    {
        return this.LoginPage;
    }

    getDashBoardPage()
    {
        return this.LoginPage;
    }

}
module.exports={POmanager}