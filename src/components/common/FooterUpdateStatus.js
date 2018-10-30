/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Web Interface
*  FooterUpdateStatus component
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */

import React from 'react';
import { translate } from "react-i18next";

const FooterUpdateStatus = () => {
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
};

export default translate(["common", "footer"])(FooterUpdateStatus);
