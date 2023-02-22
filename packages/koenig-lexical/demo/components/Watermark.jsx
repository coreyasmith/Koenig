import React from 'react';
import {ReactComponent as GhostFavicon} from './icons/ghost-favicon.svg';

function EditorLink({editorType, children}) {
    return (
        <a href={editorType?.url} rel="nofollow ugc noopener noreferrer" key={editorType}>
            <span className="invisible ml-[.7rem] font-normal hover:font-bold group-hover:visible">/ {editorType?.name}</span>
        </a>
    );
}

const Watermark = ({editorType}) => {
    if (!editorType) {
        return (
            <a href="https://github.com/TryGhost/Koenig/tree/main/packages/koenig-lexical" target="_blank" rel="nofollow ugc noopener noreferrer" className="absolute bottom-4 left-6 z-20 flex items-center rounded bg-white py-1 pr-2 pl-1 font-mono text-sm tracking-tight text-black">
                <GhostFavicon className="mr-2 h-6 w-6" />
                <span className="pr-1 font-bold tracking-wide">Koenig</span>
            editor
            </a>
        );
    }
    const editorTypes = [
        {
            name: 'full',
            url: '/'
        },
        {
            name: 'minimal',
            url: '/minimal'
        },
        {
            name: 'basic',
            url: '/basic'
        }
    ];

    const remainingEditorTypes = editorTypes.filter(type => type.name !== editorType);
    const editorLinks = remainingEditorTypes.map(type => <EditorLink editorType={type} />);
    return (
        <>
            <div className="group absolute bottom-4 left-6 z-20 flex items-center rounded bg-white py-1 pr-2 pl-1 font-mono text-sm tracking-tight text-black">
                <GhostFavicon className="mr-2 h-6 w-6" />
                <span className="pr-1 font-bold tracking-wide">Koenig</span>
                <span className="group-hover:font-bold">{editorType}
                    {editorLinks}
                </span>
            </div>
        </>
    );
};

export default Watermark;
