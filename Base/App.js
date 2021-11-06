import EventManager from "./EventManager";
import Validation from "./Validation";
import Holism from "./Holism";
import Globalization from './Globalization';

const app = {
    ...EventManager,
    ...Validation,
    ...Holism,
    ...Globalization
};

export default app;

export { app };