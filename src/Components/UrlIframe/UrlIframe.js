import React from "react";
const UrlIframe = ({ url }) => {
    return <div className="window">
        <div className="window-iframe">
            <iframe title="url" className="url-iframe" src={url} />
        </div>
    </div>
}
export default React.memo(UrlIframe);