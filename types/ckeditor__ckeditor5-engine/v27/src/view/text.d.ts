import Document from "./document";
import Node from "./node";

export default class Text extends Node {
    readonly data: string;

    protected constructor(document: Document, data: string);

    is(type: string): boolean;
    isSimilar(otherNode: Text): boolean;
    toJSON(): ReturnType<Node["toJSON"]> & { data: string };
}
