import React from 'react';
import { translate } from "react-i18next";

const FooterVersion = ({t, updates}) => {
    
    if(updates){
        return(
            <div className="ml-auto">
                <a href="">Update Available</a>
            </div>
        );
    }else{
        return null;
    }
}

export default translate(["common", "footer"])(FooterVersion);
