import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';


export default function Markdown({ text }: { text: string }) {
    return <Viewer
 		initialValue={text}
    />
}