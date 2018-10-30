import React from 'react';
import { translate } from "react-i18next";

const FooterUpdateStatus = (props) => {
    const { t } = props;
    const updateAvailable = false;
    
    if(updateAvailable){
        return(
            <div className="ml-auto">
                <a href="">Update Available</a>
            </div>
        );
    }else{
        return null;
    }
}

export default translate(["common", "footer"])(FooterUpdateStatus);
