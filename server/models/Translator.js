import { pipeline } from "@huggingface/transformers";

export default class Translator {
    static translator = null;

    static async getTranslator() {
        if (this.translator === null) {
            this.translator = await pipeline(
                "translation",
                "Xenova/nllb-200-distilled-600M",
                { dtype: "q8" }
            );
        }

        return this.translator;
    }

    static async translate(textENG) {
        return this.getTranslator().then((translator) =>
            translator(textENG, {
                src_lang: "eng_Latn",
                tgt_lang: "por_Latn",
            }).then((result) => result[0].translation_text)
        );
    }
}
