import ImageCaptioner from "./ImageCaptioner";

export default async function generateCaption(imageUrl) {
    ImageCaptioner.getCaptioner();
    return ImageCaptioner.generateCaption(imageUrl);
}
