import EventManager from "./EventManager";
import Validation from "./Validation";
import Holism from "./Holism";
import Globalization from './Globalization';
if (process.env.NODE_ENV == "development")
{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
}

const app = {
    ...EventManager,
    ...Validation,
    ...Holism,
    ...Globalization
};

export default app;

export { app };

export { get, post } from './Api';