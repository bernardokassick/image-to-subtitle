import { pipeline } from "@huggingface/transformers";
export default class ImageCaptioner {
    static captioner = null;

    static async getCaptioner() {
        console.log("Retornando captioner...");
        if (this.captioner === null) {
            this.captioner = await pipeline(
                "image-to-text",
                "xenova/vit-gpt2-image-captioning",
                { dtype: "q8" }
            );
            console.log("Modelo carregado");
        }
        return this.captioner;
    }

    static async generateCaption(imageUrl) {
        return this.getCaptioner().then((captioner) => {
            console.log(captioner);
            return captioner(imageUrl).then((result) => {
                console.log("Caption gerada:", result);
                return result[0].generated_text;
            });
        });
    }
}
