import EventManager from "./EventManager";
import Validation from "./Validation";
import Holism from "./Holism";
import Cookie from "./Cookie";
if (process.env.NODE_ENV == "development")
{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
}

const app = {
    ...EventManager,
    ...Validation,
    ...Holism,
    ...Cookie
};

export default app;

export { app };

export { get, post } from './Api';