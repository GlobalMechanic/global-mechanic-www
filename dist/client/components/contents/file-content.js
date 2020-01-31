"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const content_1 = __importDefault(require("./content"));
const fetch_file_metadata_1 = __importDefault(require("../../util/fetch-file-metadata"));
const host_1 = __importDefault(require("../../util/host"));
const text_content_1 = __importDefault(require("./text-content"));
/***************************************************************/
// Helper
/***************************************************************/
const getContentType = (meta) => {
    const { mime } = meta;
    return mime.includes('video')
        ? 'video'
        : mime.includes('image')
            ? 'image'
            : 'download';
};
/***************************************************************/
// Hooks
/***************************************************************/
const useFileMetadata = (fileId) => {
    const [metaData, setMetaData] = react_1.useState(null);
    react_1.useEffect(() => {
        if (fileId)
            fetch_file_metadata_1.default(fileId).then(setMetaData);
        else if (metaData)
            setMetaData(null);
    }, [fileId]);
    return metaData;
};
const Video = (props) => {
    const { content, meta, ...rest } = props;
    return react_1.default.createElement("video", Object.assign({ muted: true, autoPlay: true, loop: true }, rest),
        react_1.default.createElement("source", { src: `${host_1.default}/file/${content.file}`, type: meta.mime }));
};
const Image = (props) => {
    const { meta, content } = props;
    console.log(meta, content);
    return react_1.default.createElement("picture", null);
};
const Download = (props) => {
    const { meta, content } = props;
    return react_1.default.createElement("a", { target: '_blank', rel: 'noopener noreferrer', href: `${host_1.default}/file/${content.file}?download=${meta.name + meta.ext}` }, meta.name + meta.ext);
};
const File = {
    video: Video,
    image: Image,
    download: Download
};
/***************************************************************/
// FileContent Component
/***************************************************************/
const FileContent = (props) => {
    const { description: Description = text_content_1.default, content, ...rest } = props;
    const meta = useFileMetadata(content.file);
    const description = meta && meta.description;
    const Component = meta && File[getContentType(meta)];
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(content_1.default, Object.assign({ content: content }, rest), meta && Component
            ? react_1.default.createElement(Component, { content: content, meta: meta })
            : null),
        Description && description
            ? react_1.default.createElement(Description, { content: {
                    type: 'text',
                    text: description
                } })
            : null);
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = FileContent;
