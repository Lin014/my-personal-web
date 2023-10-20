import { useRouteError } from "react-router-dom";

import { Typography } from "@mui/material";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error-page">
            <Typography variant="h1">Oops!</Typography>
            <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
            <Typography variant="body1">{error.statusText || error.message }</Typography>
        </div>
    )
}

export default ErrorPage;