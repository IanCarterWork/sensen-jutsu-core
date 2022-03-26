export function CreatePluginChild(instance, identifier, tag = 'div') {
    const $child = document.createElement(tag || 'div');
    $child.setAttribute('plugin-child', `@${identifier}`);
    instance.appendChild($child);
    return $child;
}
export function GetPluginChild(instance, identifier, tag = 'div') {
    return instance.querySelector(`${tag}[plugin-child="@${identifier}"]`);
}
export function PluginChild(instance, identifier, tag = 'div') {
    const $get = GetPluginChild(instance, identifier, tag);
    if ($get instanceof HTMLElement) {
        return $get;
    }
    else {
        return CreatePluginChild(instance, identifier, tag);
    }
}
const PluginMaker = {
    Child: PluginChild,
    FindChild: GetPluginChild,
    CreateChild: CreatePluginChild,
};
export default PluginMaker;
