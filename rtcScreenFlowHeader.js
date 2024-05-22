import { LightningElement, api } from 'lwc';

export default class RtcScreenFlowHeader extends LightningElement {
    @api rtcScreenFlowHeaderTitle;
    @api rtcScreenFlowHeaderSubTitle;
    @api sldsIconName;
    @api sldsIconSize;
}
