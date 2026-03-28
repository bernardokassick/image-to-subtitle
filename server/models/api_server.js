import Translator from "./Translator.js";

export async function tranlated_text(text) {
    return Translator.translate(text);
}
