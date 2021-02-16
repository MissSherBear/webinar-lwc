import { LightningElement, api} from 'lwc';

export default class webinar extends LightningElement {
    @api webinarTitle;
    @api webinarDate;
    @api webinarTime;
    @api displayMonth;
    @api displayDay;
    @api buttonlabel;
    @api buttonlink;
    @api agendaItem1;
    @api agendaItem2;
    @api agendaItem3;
    @api agendaItem4;
}



