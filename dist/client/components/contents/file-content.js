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
const styled_components_1 = __importDefault(require("styled-components"));
const fetch_file_metadata_1 = __importDefault(require("../../util/fetch-file-metadata"));
const host_1 = __importDefault(require("../../util/host"));
const text_content_1 = __importDefault(require("./text-content"));
const css_1 = require("../../util/css");
/***************************************************************/
// Helper
/***************************************************************/
const getContentType = (meta) => {
    const { mime, ext } = meta;
    return ext === 'md' || ext === '.md'
        ? 'markdown'
        : mime.includes('video')
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
const useFileText = (fileId) => {
    const [text, setText] = react_1.useState('');
    react_1.useEffect(() => {
        if (fileId) {
            const URL = `${host_1.default}/file/${fileId}`;
            fetch(URL)
                .then(res => res.text())
                .then(setText);
        }
        else if (text)
            setText('');
    });
    return text;
};
const Video = styled_components_1.default((props) => {
    const { content, meta, ...rest } = props;
    return react_1.default.createElement("video", Object.assign({ controls: true }, rest),
        react_1.default.createElement("source", { src: `${host_1.default}/file/${content.file}`, type: meta.mime }));
}) `
    width: 100%; 
`;
const Image = styled_components_1.default((props) => {
    const { content, meta, ...rest } = props;
    const src = `${host_1.default}/file/${content.file}`;
    return react_1.default.createElement("img", Object.assign({ src: src }, rest));
}) `

    margin: auto;

    max-width: 100%;
    max-height: 100%;
    margin-bottom: -0.1em;
`;
const Download = styled_components_1.default((props) => {
    const { meta, content, ...rest } = props;
    return react_1.default.createElement("a", Object.assign({ target: '_blank', rel: 'noopener noreferrer', href: `${host_1.default}/file/${content.file}?download=${meta.name + meta.ext}` }, rest),
        "\u2193 ",
        meta.name + meta.ext);
}) `
    background-color: ${p => p.theme.colors.accent};

    font-size: 2em;
    font-family: monospace;
    
    color: inherit;
    
    padding: 0.25em;
    text-decoration: none;

    display: block;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
`;
const Markdown = styled_components_1.default((props) => {
    const text = useFileText(props.content.file);
    return react_1.default.createElement(text_content_1.default, { content: {
            type: 'text',
            text
        } });
}) `
    background-color: transparent;
`;
const FileViewComponents = {
    video: Video,
    image: Image,
    download: Download,
    markdown: Markdown
};
/***************************************************************/
// FileContent Component
/***************************************************************/
const FileContent = styled_components_1.default((props) => {
    const { description: Description = text_content_1.default, content, ...rest } = props;
    const meta = useFileMetadata(content.file);
    const description = meta && meta.description;
    const FileViewComponent = meta && FileViewComponents[getContentType(meta)];
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", Object.assign({}, rest), meta && FileViewComponent
            ? react_1.default.createElement(FileViewComponent, { content: content, meta: meta })
            : null),
        Description && description
            ? react_1.default.createElement(Description, { content: {
                    type: 'text',
                    text: description
                } })
            : null);
}) `
    ${css_1.content}
    display: flex;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = FileContent;
