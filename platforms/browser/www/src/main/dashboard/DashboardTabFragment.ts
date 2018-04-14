import {Fragment} from "../../../libs/framework/Fragment";
import * as $ from 'jquery';

export class DashboardTabFragment extends Fragment{

    private welcomeMessageLabel;

    initialize(): void {
        this.welcomeMessageLabel = $("#welcome_message");
        this.welcomeMessageLabel.text( "Hello world" );
    }

}