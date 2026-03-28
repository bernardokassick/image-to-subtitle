import ImageCaptioner from "./ImageCaptioner";

export default async function generateCaption(imageUrl) {
    ImageCaptioner.getCaptioner();
    return ImageCaptioner.generateCaption(imageUrl);
}

export async function translate(text) {
    const response = await fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log(data.tranlated_text);
    return data.tranlated_text;
}
